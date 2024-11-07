import { fn } from "@storybook/test";

import { Component } from "./index";

export const generateActionData = () => ({
  onSubmit: (args) => console.log("Submit", args),
  provinces: [
    { id: "1", name: "Hanoi" },
    { id: "2", name: "HCM" },
  ],
  districts: [
    { id: "1", name: "Dong Da", parent: "1" },
    { id: "2", name: "Cau Giay", parent: "1" },
    { id: "3", name: "Tan Binh", parent: "2" },
    { id: "4", name: "Binh Thanh", parent: "2" },
  ],
  wards: [
    { id: "1", name: "Quoc Tu Giam", parent: "1" },
    { id: "2", name: "Xuan Thuy", parent: "1" },
    { id: "3", name: "Xuan Thuy 2", parent: "2" },
    { id: "4", name: "Xuan Thuy 3", parent: "3" },
    { id: "5", name: "Xuan Thuy 4", parent: "4" },
  ],
  status: "idle",
  errorMessage: "",
});

export default {
  component: Component,
  title: "Pages/User/Register",
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

export const Submitting = {
  args: {
    ...generateActionData(),
    status: "submitting",
  },
};

export const Success = {
  args: {
    ...generateActionData(),
    status: "success",
  },
};

export const Error = {
  args: {
    ...generateActionData(),
    status: "error",
    errorMessage: "Error message",
  },
};
