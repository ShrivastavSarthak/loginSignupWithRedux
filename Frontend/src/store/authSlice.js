import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDELA: "Ideal",
  ERROR: "Error",
  LOADING: "Loading",
});


const authSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    email: null,
    password: null,
  },
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
      email = state.email;
    },
    setPassword(state, action) {
      state.password = action.payload;
      password = state.password;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = STATUSES.IDELA;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setEmail, setPassword } = authSlice.actions;
export default authSlice.reducer;

export const fetchUser = createAsyncThunk(
  "login/fetch",
  async ({ isEmail, isPassword }) => {
    try {
      console.log(isEmail, isPassword);
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isEmail, isPassword }),
      });
      const result = await res.json();
      console.log(result);
      return result;
    } catch (err) {
      return err;
    }
  }
);

// export const fetchUser = createAsyncThunk(
//   "signUp/fetch",
//   async ({email,password}) => {
//     try {
//       console.log(email,password);
//       const response = await fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           password
//         }),
//       });

//       if (response.ok) {
//         // If the response is successful, you can dispatch additional actions or update the state
//         return { success: true };
//       } else {
//         // Handle the case where the request was not successful
//         throw new Error("Failed to sign up");
//       }
//     } catch (error) {
//       // Handle any errors that occurred during the fetch
//       console.error("Error during signup:", error);
//       throw error; // Rethrow the error to be caught by the rejection of the promise
//     }
//   }
// );
