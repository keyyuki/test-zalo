import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";

export const HasUserGuard = ({ children }: React.PropsWithChildren) => {
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const navigate = useNavigate();
  if (authStatus !== "hasUser") {
    navigate("/register");
    return null;
  }
  return <>{children}</>;
};
