import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./authSlice";

let name
let email
let password


const signupSlice = createSlice({
  name: "signup",
  initialState: {
    name: null,
    email: null,
    password: null,
    status: STATUSES.IDELA,
  },
  reducers: {
    setSName(state, action) {
      state.name = action.payload;
      name = state.name
    },
    setSEmail(state, action) {
      state.email = action.payload;
      email = state.email
    },
    setSPassword(state, action) {
      state.password = action.payload;
      password = state.password
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupSlice.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(signupSlice.fulfilled, (state, action) => {
        state.status = STATUSES.IDELA;
      })
      .addCase(signupSlice.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setSName, setSEmail, setSPassword } = signupSlice.actions;
export default signupSlice.reducer;

export const signupUser = createAsyncThunk("signUp/fetch", async ({name,email,password}) => {
  const res = await fetch("http://localhost:3000/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
      userType: "buyer"
    }),
  });
  
  try{
    if(res){
        console.log("success");
    }
  }catch(err){
    console.log(err);
}
});
