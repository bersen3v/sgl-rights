import { gameEventApiManager } from "@/entities/gameEvent/api/gameEventApiManager";
import { GameEvent } from "@/entities/gameEvent/model/gameEvent";
import { useMutateRequest } from "@/shared/network/hooks/useMutateRequest";
import { OptionType } from "@/shared/widgets/customSelect/customSelect";
import useCustomFilters from "@/shared/widgets/filtersBox/hooks/useCustomFilters";
import { useLayoutEffect, useState } from "react";
import { MultiValue, SingleValue } from "react-select";

export default function useSearch() {
  const filtersController = useCustomFilters({
    onChange: () => {},
  });

  const [events, setEvents] = useState<GameEvent[] | undefined>(undefined);

  const [searchEventsRequest, mutateSearchEventsRequest] = useMutateRequest(
    gameEventApiManager.searchEvents,
    {
      onSuccess: (events: GameEvent[]) => {
        setEvents(events);
      },
      onFail: () => {},
    }
  );

  const search = () => {
    mutateSearchEventsRequest({
      type: (
        filtersController.viewModeController.selected as SingleValue<OptionType>
      )?.value!,

      disciplinesIds: (
        filtersController.disciplinesController
          .selected as MultiValue<OptionType>
      ).map((val) => val.value),

      managersIds: (
        filtersController.managersController.selected as MultiValue<OptionType>
      ).map((val) => val.value),

      developersIds: (
        filtersController.developersController
          .selected as MultiValue<OptionType>
      ).map((val) => val.value),

      prizeMinLimit: 1000,
      prizeMaxLimit: 1000000,
      startTime: 1232131423,
      endTime: 3422342342,
    });
  };

  const initSearch = () => {
    mutateSearchEventsRequest({
      type: 1,
      disciplinesIds: [],
      managersIds: [],
      developersIds: [],
      prizeMinLimit: 0,
      prizeMaxLimit: 1000000,
      startTime: 123,
      endTime: 123,
    });
  };

  useLayoutEffect(() => {
    initSearch();
  }, []);

  return {
    events,
    search,
    initSearch,
    filtersController,
  };
}
