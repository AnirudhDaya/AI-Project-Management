
"use client";
import React from "react";
import { useEffect,useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/navigation";


import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "@/app/firebase/config";
import { useForm } from "react-hook-form";
import { Toaster } from "sonner";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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

  const [error, setError] = useState("");

  const onSubmit = (data: any) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear the error state on successful registration
    RegisterWithEmail(data);
  };

  const RegisterWithEmail = async (data: any) => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify(data ? data : {}),
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);
        setError(""); // Clear the error state on successful registration
        router.replace("/dashboard")
      } else {
        const errorResponse = await res.json();
        console.error(errorResponse);
        setError("Registration failed. Please check your credentials."); // Set the error state
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An unexpected error occurred. Please try again."); // Set the error state
    }
  };

  function signInWithGoogle() {
    signInWithRedirect(auth, provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in. Redirect to the protected page.
        router.replace("/dashboard");
      }
    });
  
    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, [router]);

  return (
    <section className="container h-screen w-full flex flex-col items-center justify-center bg-gray-900">
      <div className="image-container">
        <Image
          src="/logo.jpg" // Replace with your image path
          alt="Logo"
          width={150} // Adjust width as needed
          height={150} // Adjust height as needed
        />
      </div>
      <div className="form signup w-full max-w-md p-6 rounded-md bg-gray-800">
        <div className="form-content">
          <header className="text-2xl font-semibold text-center text-white">
            Signup
          </header>
          <Toaster richColors  />
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
          {/* <form action="#"> */}
            <div className="field input-field mt-4 text-black">
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input w-full py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="field input-field relative mt-4 text-black">
            <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="input w-full py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
              <i
                className="eye-icon absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </i>
            </div>

            <div className="field input-field mt-4 text-black">
              <input
                type="password"
                // {...register("confirmPassword")}
                placeholder="Confirm password"
                className="input w-full py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="field button-field mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              >
                Signup
              </button>
            </div>
          </form>

          <div className="form-link mt-4">
            <span className="block">
              Already have an account?{" "}
              <Link
                href="/"
                className="link login-link text-blue-500 hover:underline"
              >
                Login
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
              height={35}
              width={35}
              className="google-img mr-2"
            />
            <span className="text-sm font-semibold">Signup with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
}
