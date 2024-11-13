import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Spinner } from "@/components/ui/spinner"; // Assuming Spinner is a component from Shadcn
import { Outlet } from "react-router-dom";

export const LoadingAuthGuard = () => {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  if (authStatus === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }
  return <Outlet />;
};
