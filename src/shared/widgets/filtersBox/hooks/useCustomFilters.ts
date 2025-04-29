import {
  Filters,
  InitFilters,
  InitViewModeFilter,
} from "@/entities/filters/model/filters";
import useCustomSelect from "../../customSelect/hooks/useCustomSelect";
import useRequest from "@/shared/network/hooks/useRequest";
import { filtersApiManager } from "@/entities/filters/api/filtersApiManager";
import { useEffect, useState } from "react";

export default function useCustomFilters({
  onChange,
}: {
  onChange: () => void;
}) {
  const [filters, setFilters] = useState<Filters>(InitFilters);

  const [filtersRequest, reloadFiltersRequest] = useRequest(
    filtersApiManager.getFilters,
    []
  );

  useEffect(() => {
    if (!filtersRequest.isLoading && filtersRequest.isLoaded) {
      setFilters(filtersRequest.data);
    }
  }, [filtersRequest]);

  const viewModeController = useCustomSelect({
    options: filters.viewMode,
    onChange: onChange,
  });

  const developersController = useCustomSelect({
    options: filters.developers,
    onChange: onChange,
  });

  const disciplinesController = useCustomSelect({
    options: filters.disciplines,
    onChange: onChange,
  });

  const managersController = useCustomSelect({
    options: filters.managers,
    onChange: onChange,
  });

  const clear = () => {
    viewModeController.setSelected(InitViewModeFilter);
    managersController.setSelected([]);
    developersController.setSelected([]);
    disciplinesController.setSelected([]);
  };

  return {
    viewModeController,
    developersController,
    disciplinesController,
    managersController,
    filtersRequest,
    clear,
  };
}
