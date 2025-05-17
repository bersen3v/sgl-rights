"use client";
import { userApiManager } from "@/entities/user/api/userApiManager";
import useRequest from "@/shared/network/hooks/useRequest";
import { MyBordersRadius, MyColors, MySpacing } from "@/shared/styles";
import UserInfo from "./components/userInfo/userInfo";
import { useWindowSize } from "react-use";
import UserPageDesktopView from "./views/userPageDesktopView";
import UserPageMobileView from "./views/userPageMobileView";
import { desktopMinWidth } from "@/shared/constants/adaptive";

export default function UserPageView({ userId }: { userId: string }) {
  const { width } = useWindowSize();

  const [userInfoRequest, reloadUserInfoRequest] = useRequest(
    () => userApiManager.getUserById({ id: userId }),
    []
  );

  return (
    <div>
      {userInfoRequest.isLoading || !userInfoRequest.isLoaded ? (
        <div>грузится</div>
      ) : (
        <div style={{ padding: MySpacing.s25 }}>
          {width > desktopMinWidth ? (
            <UserPageDesktopView
              user={userInfoRequest.data}
            ></UserPageDesktopView>
          ) : (
            <UserPageMobileView
              user={userInfoRequest.data}
            ></UserPageMobileView>
          )}
        </div>
      )}
    </div>
  );
}
