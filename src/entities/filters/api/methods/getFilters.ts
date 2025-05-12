import { Filters } from "../../model/filters";

export default async function getFilters(): Promise<Filters> {
  const data = {
    result: {
      viewMode: [
        { value: 1, label: "all" },
        { value: 2, label: "coming" },
        { value: 3, label: "past" },
      ],
      managers: [
        { label: "Организатор 1", value: 1 },
        { label: "Организатор 2", value: 2 },
      ],
      disciplines: [
        { value: 1, label: "CS:GO" },
        { value: 2, label: "DOTA" },
      ],
      developers: [
        { value: 1, label: "Valve" },
        { value: 2, label: "Steam" },
      ],
    },
  };

  const filters = (data as { result: Filters }).result;
  return filters;
}
