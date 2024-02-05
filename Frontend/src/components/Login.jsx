import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../store/authSlice";
import { fetchUser } from "../store/authSlice";
import {
  setSEmail,
  setSName,
  setSPassword,
  signupUser,
} from "../store/signupSlice";
function Login() {
  const [logIn, isLogin] = useState(false);
  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const dispatch = useDispatch();

  const handleClick = async () => {
    if (logIn) {
      dispatch(setEmail(isEmail));
      dispatch(setPassword(isPassword));

      console.log(isEmail,isPassword);
      try{
        const res =  dispatch(fetchUser({isEmail, isPassword})) ;
        
        if (res) {
          console.log("Success");
        }
      }catch(err){
        console.log(err);
      }
    } else {
      dispatch(setSName(isName));
      dispatch(setSEmail(isEmail));
      dispatch(setSPassword(isPassword));
      try {
        const res = dispatch(signupUser({isName, isEmail, isPassword})) ;
        if (res) {
          console.log("signup success");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  let check = false;

  if (logIn) {
    if (isEmail && isPassword) {
      check = true;
    }
  } else {
    if (isName && isEmail && isPassword) {
      check = true;
    }
  }

  return (
    <>
      <center>
        <div className="loginForm mt-20">
          {logIn ? (
            <h1 className="font-bold text-3xl pt-4 px-5 pb-20 ">Login</h1>
          ) : (
            <h1 className="font-bold text-3xl pt-4 px-5 pb-20 ">Signup</h1>
          )}
          {!logIn && (
            <TextField
              className=" mt-10"
              placeholder="Name"
              type="text"
              variant="outlined"
              size="small"
              onChange={(e) => setIsName(e.target.value)}
            />
          )}
          <div className="my-3">
            <TextField
              className=" mt-3"
              placeholder="Email"
              type="email"
              variant="outlined"
              size="small"
              onChange={(e) => setIsEmail(e.target.value)}
            />
          </div>

          <TextField
            className="mt-3"
            placeholder="password"
            type="password"
            variant="outlined"
            size="small"
            onChange={(e) => setIsPassword(e.target.value)}
          />
          {logIn && (
            <p className="mt-2 text-xs text-slate-500">forget password?</p>
          )}

          {logIn ? (
            <p className="mt-2 text-xs text-slate-500">
              New to Raffia World?{" "}
              <Button
                variant="text"
                size="small"
                sx={{ color: "#212121" }}
                color="secondary"
                onClick={() => isLogin(!logIn)}
              >
                Create account?
              </Button>
            </p>
          ) : (
            <p className="mt-2 text-xs text-slate-500">
              Already have a account?{" "}
              <Button
                sx={{ color: "#212121" }}
                variant="text"
                size="small"
                color="secondary"
                onClick={() => isLogin(!logIn)}
              >
                Login?
              </Button>
            </p>
          )}

          <div className="p-3 flex justify-between">
            <Button variant="outline">Cancle</Button>
            <button className="btn" onClick={handleClick} disabled={!check}>
              {logIn ? "Login" : "signin"}
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default Login;
