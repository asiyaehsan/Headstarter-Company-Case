import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import left from "./images/left.png";

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <section class="flex flex-col md:flex-row h-screen items-center">
      <div class="bg- hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen object-scale-down h-48 w-96">
        <img src={left} alt="" class="w-full pr-20 h-full object-cover" />
      </div>

      <div
        class="position:relative xl:w-1/2 px-10
          flex items-center justify-center">
        <div class="w-full h-100">
          <h1 class="text-8xl text-indigo-900 font-bold mb-20">
            Welcome Back!
          </h1>

          {/* <form class="mt-6" action="#" method="POST">
            <div>
              <label class="block font-bold text-3xl text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autocomplete
                required
              />
            </div>

            <div class="mt-8">
              <label class="block font-bold text-3xl text-gray-700">
                Password
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Enter your password"
                minlength="6"
                class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div class="text-right mt-2">
              <a
                href="#"
                class="text-sm font-bold text-xl font-semibold text-gray-700 hover:text-indigo-500 focus:text-indigo-600">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              class="w-full block bg-indigo-400 hover:bg-indigo-500 focus:bg-indigo-600 text-2xl text-white font-semibold rounded-lg
                px-4 py-3 mt-6">
              Sign In
            </button>
          </form> */}

          <hr class="my-6 mt-10 border-black w-full" />

          <div class="flex mt-10 justify-center">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>

          {/* <p class="mt-10 text-2xl text-indigo-400 flex justify-center">
            Don't have an account?
            <a
              href="#"
              class="ml-2 text-2xl text-indigo-900 hover:text-indigo-500 focus:text-indigo-600 font-semibold">
              Sign up!
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}
