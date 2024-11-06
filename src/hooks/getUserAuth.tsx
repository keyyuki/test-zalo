import { authorize, getUserID } from "zmp-sdk/apis";
import { useState } from "react";

export const useAuthRequest = () => {
  const [authData, setAuthData] = useState<any>({
    status: "idle",
    data: null,
    errorMessage: null,
  });

  const request = async () => {
    setAuthData({ status: "loading" });
    try {
      console.log("requesting");
      const data = await authorize({
        scopes: ["scope.userLocation", "scope.userPhonenumber"],
      });
      console.log("data", data);
      const userId = await getUserID();
      console.log("userId", userId);
      setAuthData({
        status: "success",
        data,
      });
    } catch (error) {
      setAuthData({
        status: "error",
        errorMessage: (error as Error).message,
      });
    }
  };

  return { authData, request };
};
