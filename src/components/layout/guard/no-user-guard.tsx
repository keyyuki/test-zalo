import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";

export const NoUserGuard = ({ children }: React.PropsWithChildren) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();
  if (authStatus !== "noUser") {
    navigate("/profile");
    return null;
  }
  return <>{children}</>;
};
