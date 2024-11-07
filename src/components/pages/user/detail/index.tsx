import React from "react";
import { Button } from "@/components/ui/button";

export type PropType = {
  name: string;
  phone: string;
  address: string;
  avatar: string;
  isAfterRegister: boolean;
  updateProfile: () => void;
  goToSystem: () => void;
};
export function Component(props: PropType) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-6 space-y-6">
        <div className="flex justify-center">
          <img src={props.avatar} alt={props.name} className="w-24 h-24" />
        </div>

        <h1 className="text-center text-[#00B14F] text-2xl font-medium">
          {props.name}
        </h1>

        <div className="space-y-2">
          <div className="flex gap-2 grid grid-cols-3">
            <span className="text-gray-700">Số điện thoại :</span>
            <span className="text-gray-900 col-span-2">{props.phone}</span>
          </div>
          <div className="flex gap-2 grid grid-cols-3">
            <span className="text-gray-700">Địa chỉ :</span>
            <span className="text-gray-900 col-span-2">{props.address}</span>
          </div>
        </div>

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          type="button"
          onClick={props.updateProfile}
        >
          Thay đổi thông tin
        </Button>

        <div className="space-y-2">
          {props.isAfterRegister && (
            <p className="text-[#00B14F]">
              Chúc mừng đăng ký thành công. Từ nay, bạn sẽ dùng Zalo này để đăng
              nhập hệ thống.
            </p>
          )}
          <p className="text-[#00B14F]">
            Mời bạn nhấn nút [Truy cập hệ thống] để bắt đầu khám phá Xác Thực
            Số.
          </p>
        </div>

        <Button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          type="button"
          onClick={props.goToSystem}
        >
          Truy cập hệ thống
        </Button>
      </div>
    </div>
  );
}
