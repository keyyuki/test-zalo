import React from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "@/pages/index";
import About from "@/pages/about";
import Form from "@/pages/form";
import User from "@/pages/user";
import { useAppBootstrap } from "@/hooks/useAppBootstrap";
import { Provider } from "react-redux";
import store from "@/store";

const MyApp = () => {
  useAppBootstrap();
  return (
    <Provider store={store}>
      <RecoilRoot>
        <App>
          <SnackbarProvider>
            <ZMPRouter>
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/form" element={<Form></Form>}></Route>
                <Route path="/user" element={<User></User>}></Route>
              </AnimationRoutes>
            </ZMPRouter>
          </SnackbarProvider>
        </App>
      </RecoilRoot>
    </Provider>
  );
};
export default MyApp;
