import { TextField } from "@mui/material";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-full mt-36 font-primary">
      <div className="w-full lg:w-[50%] mx-auto bg-slate-50 shadow-lg rounded-md px-4 py-1">
        <p className="font-bold text-4xl my-10">Signup Here !!</p>
        <div className="w-full flex flex-wrap lg:flex-nowrap  gap-5">
          <TextField
            fullWidth
            required
            label="Full Name"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "14px",
              },
            }}
          />
          <TextField
            fullWidth
            required
            label="Email"
            type="email"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "14px",
              },
            }}
          />
          <TextField
            fullWidth
            type="tel"
            required
            label="Phone"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "14px",
              },
            }}
          />
        </div>
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-5 my-5">
          <TextField
            fullWidth
            required
            type="password"
            label="Password"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "14px",
              },
            }}
          />
          <TextField
            fullWidth
            required
            label="Address"
            variant="outlined"
            InputProps={{
              style: {
                fontSize: "14px",
              },
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full font-bold py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
        >
          Sign Up
        </button>
        <p className="w-fit mx-auto my-4">Or</p>

        <button className="flex items-center justify-center gap-5 w-full py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
          <BsFacebook size={25} />
          <p>Signup with Facebook</p>
        </button>

        <button className="flex items-center justify-center gap-5 w-full py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
          <FcGoogle size={25} />
          <p>Signup with Google</p>
        </button>

        <p className="w-fit mx-auto text-2xl font-bold py-5">
          Already have an account ? <Link to={'/login'}>Sign In</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
