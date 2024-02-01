// src/app/api/register/route.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth as authConfig } from "@/app/firebase/config";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "firebase-admin";
// Function to register a new user using Firebase Authentication
export async function registerUser(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      authConfig,
      email,
      password
    );

    const user = userCredential.user;
    console.log("User registered:", user);

    // Create a session cookie after successful registration
    const idToken = await user.getIdToken();
    const expiresIn = 5 * 60 * 1000; // 5 minutes
    const sessionCookie = await auth().createSessionCookie(idToken, {
      expiresIn,
    });

    // Set the session cookie in the response
    const options = {
      name: "session",
      value: sessionCookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    };
    cookies().set(options);

    return { success: true, user };
  } catch (error) {
    console.error("Error during registration:", error);
    return { success: false, error: (error as Error).message };
  }
}

// POST request handler
export async function POST(request: NextRequest) {
  try {
    // Extract email and password from the request body
    const { email, password } = await request?.json();

    // Check if email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Register the user
    const registrationResult = await registerUser(email, password);

    if (registrationResult.success) {
      // Registration successful
      return NextResponse.json({
        message: "Registration successful.",
        user: registrationResult.user,
      });
    } else {
      // Registration failed, return an error response
      return NextResponse.json(
        { error: registrationResult.error },
        { status: 500 }
      );
    }
  } catch (error) {
    // Handle unexpected errors
    console.error("Error during registration:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
