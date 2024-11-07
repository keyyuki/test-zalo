import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMobilePhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { Alert, AlertDescription } from "@/components/ui/alert";

type LocationOption = {
  id: string;
  name: string;
  parent?: string;
};
type PropType = {
  onSubmit: (params: any) => void;
  provinces: LocationOption[];
  districts: LocationOption[];
  wards: LocationOption[];
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string;
};

export function Component({
  onSubmit,
  provinces,
  districts,
  wards,
  status,
  errorMessage,
}: PropType) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  // Mock data for autocomplete
  const submit = () => {
    onSubmit({
      phone,
      name,
      province,
      district,
      ward,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <img
              src="https://example.com/empty.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          <p className="text-lg mb-8 text-center">
            Bạn chỉ cần nhập vài thông tin này là đã có tài khoản của Xác Thực
            Số
          </p>
          {(status === "error" || status === "success") && (
            <Alert
              className={`mb-4 ${
                status === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              <AlertDescription>
                {status === "error" ? errorMessage : "Đăng ký thành công!"}
              </AlertDescription>
            </Alert>
          )}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-black">
                Số điện thoại Zalo <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src="https://example.com/user.svg"
                    alt="User icon"
                    width={20}
                    height={20}
                  />
                </span>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0389689559"
                  className="w-full pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-black">
                Tên người dùng <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-gray-500 mb-1">
                (Không quá 64 ký tự, không thể nhập ký tự đặc biệt)
              </p>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img
                    src="https://example.com/user.svg"
                    alt="User icon"
                    width={20}
                    height={20}
                  />
                </span>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  maxLength={64}
                  className="w-full pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-black">
                Địa chỉ <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <Combobox
                  value={province}
                  onChange={(e) => setProvince(e || "")}
                  as="div"
                  className="relative"
                >
                  <ComboboxButton className="relative w-full">
                    <ComboboxInput
                      className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Chọn Tỉnh/ Thành phố"
                      onChange={(event) => setProvince(event.target.value)}
                      displayValue={(province) => province as string}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-gray-400"
                      />
                    </span>
                  </ComboboxButton>
                  <ComboboxOptions className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {provinces.map((item) => (
                      <ComboboxOption
                        key={item.id}
                        value={item.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-3 pr-9 ${
                            active ? "text-white bg-blue-600" : "text-gray-900"
                          }`
                        }
                      >
                        {item.name}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                </Combobox>

                <Combobox
                  value={district}
                  onChange={(value) => setDistrict(value || "")}
                  as="div"
                  className="relative"
                >
                  <ComboboxButton className="relative w-full">
                    <ComboboxInput
                      className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Chọn Quận/ Huyện"
                      onChange={(event) => setDistrict(event.target.value)}
                      displayValue={(district) => district as string}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-gray-400"
                      />
                    </span>
                  </ComboboxButton>
                  <ComboboxOptions className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {districts.map((item) => (
                      <ComboboxOption
                        key={item.id}
                        value={item.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-3 pr-9 ${
                            active ? "text-white bg-blue-600" : "text-gray-900"
                          }`
                        }
                      >
                        {item.name}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                </Combobox>

                <Combobox
                  value={ward}
                  onChange={(value) => setWard(value || "")}
                  as="div"
                  className="relative"
                >
                  <ComboboxButton className="relative w-full">
                    <Combobox.Input
                      className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Chọn Phường/ Xã"
                      onChange={(event) => setWard(event.target.value)}
                      displayValue={(ward) => ward as string}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-gray-400"
                      />
                    </span>
                  </ComboboxButton>
                  <ComboboxOptions className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {wards.map((item) => (
                      <ComboboxOption
                        key={item.id}
                        value={item.id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-3 pr-9 ${
                            active ? "text-white bg-blue-600" : "text-gray-900"
                          }`
                        }
                      >
                        {item.name}
                      </ComboboxOption>
                    ))}
                  </ComboboxOptions>
                </Combobox>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Đang thực hiện..." : "Xác nhận"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
