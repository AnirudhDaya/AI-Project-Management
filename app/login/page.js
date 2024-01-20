"use client";
import "./login.css";
import { useState, React } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="container forms">
      <div className="image-container">
        <Image
          src="/logo.jpg" // Replace with your image path
          alt="Logo"
          width={200} // Adjust width as needed
          height={200} // Adjust height as needed
        />
      </div>
      {/* Login Form */}
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input"
              />
              <i
                className="eye-icon"
                style={{ cursor: "pointer" }}
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </i>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <Link href="/signup" className="link signup-link">
                Signup
              </Link>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field google">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt=""
              className="google-img"
            />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
