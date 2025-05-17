import { User } from "@/entities/user/model/user";
import UserInfo from "../components/userInfo/userInfo";
import UserEvents from "../components/userInfo/userEvents";

export default function UserPageMobileView({ user }: { user: User }) {
  return (
    <div>
      <UserInfo user={user} isMobile></UserInfo>
      <UserEvents userId={user.id} isMobile></UserEvents>
    </div>
  );
}
