import { useCallback, useEffect, useReducer, useState } from "react";
import { requestReducer } from "./components/requestReducer";
import { InitialState, Request } from "./components/requestStates";

export default function useRequest<T>(
  request: () => Promise<T>,
  dependences: React.DependencyList
) {
  const [trigger, setTrigger] = useState(1);

  const [state, dispatch] = useReducer(requestReducer, InitialState);

  const reload = useCallback(() => {
    setTrigger(trigger + 1);
  }, [trigger]);

  useEffect(() => {
    let isDestructed = false;
    dispatch({ type: "Loading" });
    request()
      .then((data) => {
        if (data && !isDestructed) {
          dispatch({ type: "Loaded", data: data });
        }
      })
      .catch((e) => dispatch({ type: "Loaded", data: undefined }));
    return () => {
      isDestructed = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependences, trigger]);

  return [state as Request<T>, reload] as const;
}
