import { configureStore } from "@reduxjs/toolkit";
import { setEmail, setPassword } from "./authSlice";
import { setSEmail, setSName, setSPassword } from "./signupSlice";

const store = configureStore({
  reducer: {
    email: setEmail,
    password: setPassword,
    signupName: setSName,
    signupEmail: setSEmail,
    signupPassword: setSPassword,
  },
});

export default store;
