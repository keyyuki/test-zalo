import React from "react";
import { Component } from "@/components/pages/user/register";
import { useRegister } from "./hook/index";
import { RegisterService } from "./service/register.service";

export function RegisterPage() {
  const { error, register, status, districts, provinces, wards } = useRegister({
    registerService: RegisterService.getInstance(),
  });

  return (
    <Component
      districts={districts}
      provinces={provinces}
      status={status}
      wards={wards}
      errorMessage={error || ""}
      onSubmit={register}
    />
  );
}
