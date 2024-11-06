// React core
import React from "react";
import { createRoot } from "react-dom/client";
import { AppConfigType } from "zmp-ui/router";

// Tailwind stylesheet
import "./css/tailwind.scss";

// ZaUI stylesheet
import "zmp-ui/zaui.css";

// Your stylesheet
import "./css/app.scss";

// Expose app configuration
import appConfig from "../app-config.json";
if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig as unknown as AppConfigType;
}

// Mount the app
import App from "./components/app";

const root = createRoot(document.getElementById("app")!);
root.render(React.createElement(App));
