"use client";
import "./signup.css";
import { useState, React } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
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
      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
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

            <div className="field input-field">
              <input
                type="password"
                placeholder="Confirm password"
                className="password"
              />
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Already have an account?{" "}
              <Link href="/login" className="link login-link">
                Login
              </Link>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field google">
           <Image
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              height= {35}
              width= {35}   //sus
              className="google-img"
            />
            <span>Signup with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
