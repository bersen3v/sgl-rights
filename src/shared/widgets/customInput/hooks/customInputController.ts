import { useState } from "react";

export default function useCustomInputController() {
  const [value, setValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    handleInputChange,
  };
}
