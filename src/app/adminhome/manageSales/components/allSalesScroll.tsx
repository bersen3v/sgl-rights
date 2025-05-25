import { Sale } from "@/entities/sale/model/sale";
import { MyColors } from "@/shared/styles";
import { CSSProperties } from "react";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";

export default function AllSalesScroll({ sales }: { sales: Sale[] }) {
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const sale = sales[index];

    return (
      <div style={{ marginBottom: 10, backgroundColor: MyColors.bg2 }}>sdf</div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemSize={150}
          itemCount={sales.length}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
}
