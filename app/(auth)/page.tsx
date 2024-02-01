"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import {
  getRedirectResult,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useForm } from "react-hook-form";


import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

export default function Login() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.replace("/dashboard");
        }
      });
    });
  }, [router]);

  const signInWithEmail = async (data: any) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data ? data : {}),
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);
        setError(""); // Clear the error state on successful login
        router.replace("/dashboard");
      } else {
        const errorResponse = await res.json();
        console.error(errorResponse);
        setError("Login failed. Please check your credentials."); // Set the error state
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred. Please try again."); // Set the error state
    }
  };

  function signInWithGoogle() {
    signInWithRedirect(auth, provider);
  }

  return (
    <section className="container flex flex-col items-center justify-center bg-gray-900 text-white min-h-screen">
      {" "}
      <div className="image-container">
        <Image
          src="/logo.jpg" // Replace with your image path
          alt="Logo"
          width={150} // Adjust width as needed
          height={150} // Adjust height as needed
        />
      </div>
      {/* Login Form */}
      <div className="form login w-full max-w-md p-6 rounded-md bg-gray-800">
        <div className="form-content">
          <header className="text-2xl font-semibold text-center">Login</header>
          <Toaster richColors  />
          <form
            action="#"
            onSubmit={handleSubmit(signInWithEmail)}
            className="mt-6"
          >
            <div className="field input-field mb-4 text-black">
            <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input w-full py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="field input-field relative text-black">
            <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="input w-full py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>

            <div className="form-link mb-4">
              <a href="#" className="forgot-pass text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="field button-field mb-4">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
            </div>
          </form>
          <div className="form-link">
            <span className="block">
              {`Don't have an account? `}
              <Link
                href="/signup"
                className="link signup-link text-blue-500 hover:underline"
              >
                Signup
              </Link>
            </span>
          </div>
        </div>

        <div className="line bg-gray-700 h-px w-full mt-6"></div>

        <div className="media-options mt-6">
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full py-2 px-4 rounded-md bg-white text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              width={35}
              height={35}
              className="google-img mr-2"
            />
            <span className="text-sm font-semibold">Login with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
}
