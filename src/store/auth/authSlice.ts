import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  status: "loading" | "hasUser" | "noUser";
  user?: {
    id: string;
    name: string;
    address: string;
    addressArea: string;
    phone: string;
  };
  zaloUserId: string;
  zaloAccessToken: string;
}

const initialState: AuthState = {
  status: "loading",
  user: undefined,
  zaloUserId: "",
  zaloAccessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setZaloInfo: (
      state,
      action: PayloadAction<{ zaloUserId: string; zaloAccessToken: string }>
    ) => {
      state.zaloUserId = action.payload.zaloUserId;
      state.zaloAccessToken = action.payload.zaloAccessToken;
    },
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
      state.status = "hasUser";
    },
    setNoUser: (state) => {
      state.status = "noUser";
      state.user = undefined;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
