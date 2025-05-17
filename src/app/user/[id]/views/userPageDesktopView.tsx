import { use } from "react";
import UserInfo from "../components/userInfo/userInfo";
import { User } from "@/entities/user/model/user";
import EventsScroll from "@/shared/widgets/eventsScroll/eventsScroll";
import UserEvents from "../components/userInfo/userEvents";
import { MySpacing } from "@/shared/styles";

export default function UserPageDesktopView({ user }: { user: User }) {
  return (
    <div
      style={{ display: "flex", gap: MySpacing.s15, flexDirection: "column" }}
    >
      <UserInfo user={user}></UserInfo>
      <UserEvents userId={user.id}></UserEvents>
    </div>
  );
}
