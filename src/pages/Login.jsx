import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { CarouselUI } from "components";

const slideImages = [
  'https://cdn.discordapp.com/attachments/1123144974683361401/1123930018435825764/dinner-table-with-fried-meat-dishes-sauces.jpg',
  'https://cdn.discordapp.com/attachments/1123144974683361401/1123929976316629062/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table.jpg',
  'https://cdn.discordapp.com/attachments/1123144974683361401/1123929927104872569/restaurant-interior.jpg',
  'https://cdn.discordapp.com/attachments/1123144974683361401/1123929908192739348/chicken-pork-beef-meat-skewers-with-vegetables-spicy-potatoes.jpg'
]

const Login = () => {
  return (
    <>
      <div className="w-fit lg:w-[95%] mx-auto h-fit flex mt-36 font-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-[500px] shadow-lg shadow-gray-600">
          <div className="w-full h-[500px] hidden md:block">
            {/* <img
              className="relative w-[640px] h-[500px] object-cover rounded-md "
              src="https://cdn.discordapp.com/attachments/1123144974683361401/1123183163854815232/interior-lounge-architecture-entertainment-relaxation.jpg"
              alt="loading"
            /> */}
            <CarouselUI slideImages={slideImages} width={'640px'} height={'600px'} indicator={false} status={false} />
            {/* <div className="absolute top-44 left-13 w-[640px] h-[480px] bg-gradient-to-tr from-black "></div> */}
          </div>
          <div className="flex flex-col gap-5 mx-auto px-5 lg:px-0">
            <form>
              <h2 className="text-4xl font-bold w-fit my-6 text-black">
                Login in to your account !
              </h2>
              <div className="flex flex-col gap-y-5">
                <TextField
                  className="w-full lg:w-[475px]"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  required
                  label="Email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  type="Password"
                  InputProps={{
                    style: {
                      fontSize: "14px",
                    },
                  }}
                  className="w-full lg:w-[475px]"
                  required
                  label="Password"
                  variant="outlined"
                />
              </div>
              <button
                type="submit"
                className="w-full lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all"
              >
                Log In
              </button>
              <p className="w-fit font-bold mx-auto ">Or</p>
              <button className="flex items-center justify-center gap-5 w-full lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
                <BsFacebook size={25} />
                <p>Login with Facebook</p>
              </button>

              <button className="flex items-center justify-center gap-5 w-full lg:w-[475px] py-4 lg:py-6 bg-primary hover:bg-green-700 text-white mt-6 rounded-md transition-all">
                <FcGoogle size={25} />
                <p>Login with Google</p>
              </button>
              
            </form>
            <p className="text-center">Forgot password?</p>
            <div className="text-center underline hover:text-primary-700 transition-all">
              <Link to={"/register"}>
                Don't have an account? Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
