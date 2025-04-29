import { MySpacing } from "@/shared/styles";
import FiltersBox from "@/shared/widgets/filtersBox/filtersBox";
import useCustomFilters from "@/shared/widgets/filtersBox/hooks/useCustomFilters";

export default function SearchPageFilters({
  filtersController,
}: {
  filtersController: ReturnType<typeof useCustomFilters>;
}) {
  return (
    <>
      {filtersController.filtersRequest.isLoaded ? (
        <FiltersBox filtersController={filtersController}></FiltersBox>
      ) : (
        <div></div>
      )}
    </>
  );
}
