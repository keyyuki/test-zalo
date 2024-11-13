import { useEffect } from "react";
import { MemoryStorage, STORAGE_KEY, AppDataStorage } from "@/lib/data-storage";
import { XtsHttpAdapter } from "@/lib/xts-http-adapter";
import { getUserID, getAccessToken, authorize } from "zmp-sdk";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/auth/authSlice";
import { AuthService } from "@/services/auth/auth.service";

export const useAppBootstrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrap = async () => {
      const storage = new MemoryStorage();
      storage.set(STORAGE_KEY.DOMAIN, process.env.REACT_APP_DOMAIN_API);
      XtsHttpAdapter.getInstance().setStorage(storage);
      AppDataStorage.getInstance().setStorage(storage);

      // zalo authorize
      const zaloAuthorizeResult = await authorize();
      const scope: string[] = [];
      if (zaloAuthorizeResult["scope.userInfo"]) {
        scope.push("userInfo");
      }
      if (zaloAuthorizeResult["scope.userPhonenumber"]) {
        scope.push("userPhone");
      }
      storage.set(STORAGE_KEY.ZALO_SCOPE, scope);
      const userId = await getUserID();
      storage.set(STORAGE_KEY.DEVICEID, userId);
      const zaloAccessToken = await getAccessToken();
      dispatch(
        authActions.setZaloInfo({
          zaloUserId: userId,
          zaloAccessToken: zaloAccessToken,
        })
      );

      AuthService.getInstance()
        .getXtsAccessToken({
          zaloAccessToken: zaloAccessToken,
          zaloUserId: userId,
        })
        .then((rs) => {
          if (rs) {
            dispatch(authActions.setUser(rs.user));
            storage.set(STORAGE_KEY.XTS_TOKEN, rs.token);
          } else {
            dispatch(authActions.setNoUser());
          }
        })
        .catch(() => {
          dispatch(authActions.setNoUser());
        });
    };

    bootstrap();
  }, []);

  return null;
};
