import UserInfo from "@/app/user/[id]/components/userInfo/userInfo";
import { User } from "@/entities/user/model/user";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import { MyTypography } from "@/shared/styles/MyTypography/MyTypography";
import { CSSProperties, use } from "react";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";

export default function AllUsersScroll({ users }: { users: User[] }) {
  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const user = users[index];

    return (
      <div style={{ marginBottom: 10 }}>
        <UserInfo maxHeight={140} user={user} isAdmin></UserInfo>
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemSize={150}
          itemCount={users.length}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
}
