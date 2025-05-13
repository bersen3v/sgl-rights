import { User } from "@/entities/user/model/user";
import UserInfo from "../components/userInfo/userInfo";

export default function UserPageMobileView({ user }: { user: User }) {
  return (
    <div>
      <UserInfo user={user} isMobile></UserInfo>
      <div>events</div>
    </div>
  );
}
