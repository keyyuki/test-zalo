import { Component, PropType } from "./index";

export const generateActionData = (): PropType => ({
  name: "Nguyen Van A",
  phone: "0123456789",
  address: "76 ngõ 1 đường Kim Mã, Ba Đình, Hà Nội",
  avatar: "https://via.placeholder.com/150",
  isAfterRegister: false,
  updateProfile: () => console.log("Update profile"),
  goToSystem: () => console.log("Go to system"),
});

export default {
  component: Component,
  title: "Pages/User/Detail",
  tags: ["user"],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...generateActionData(),
  },
};

export const Default = {
  args: {
    ...generateActionData(),
  },
};

export const AfterRegister = {
  args: {
    ...generateActionData(),
    isAfterRegister: true,
  },
};
