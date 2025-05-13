import { use } from "react";
import UserInfo from "../components/userInfo/userInfo";
import { User } from "@/entities/user/model/user";

export default function UserPageDesktopView({ user }: { user: User }) {
  return (
    <div>
      <UserInfo user={user}></UserInfo>
      <div>events</div>
    </div>
  );
}
