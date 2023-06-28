import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import{ BsFacebook } from 'react-icons/bs'

const Login = () => {
  return (
    <>
      <div className="w-[95%] mx-auto h-screen flex mt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[500px] shadow-lg shadow-gray-600">
          <div className="w-full h-[500px] hidden md:block">
            <img
              className="w-full h-full object-cover rounded-md"
              src='https://cdn.discordapp.com/attachments/1123144974683361401/1123183163854815232/interior-lounge-architecture-entertainment-relaxation.jpg'
              alt="loading"
            />
          </div>
          <div className="p-4 flex flex-col gap-5">
            <form>
              <h2 className="text-[40px] font-bold font-primary my-6 text-black">
                Login in to your account !
              </h2>
              <div className="flex flex-col gap-10 items-center">
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  type="Password"
                  fullWidth
                  required
                  label="Password"
                  variant="outlined"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
              >
                Log In
              </button>
              <p className="w-fit mx-auto">Or</p>
              <button className="w-full py-5 hover:bg-green-700 ">
                <p>Login with Facebook</p> 
                <BsFacebook />
              </button>
            </form>
              <p className="text-center">Forgot password?</p>
            <div className="text-center underline hover:text-primary-700 transition-all">
              <Link to={"/register"}>Don't have an account? Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
