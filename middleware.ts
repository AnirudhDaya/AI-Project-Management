// src/middleware.js
import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session");
  // const requestUrl = request.url; // Get the request URL

  // If there's no session cookie, redirect to /login
  // console.log(requestUrl);
  if (!session) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  // Call the authentication endpoint
  const url = new URL("/api/login", request.url);
  const responseAPI = await fetch(url, {
    headers: {
      Cookie: `session=${session?.value}`,
    },
  });

  // If the token is not authorized, redirect to /login
  if (responseAPI.status !== 200) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the token is authorized, proceed to the next middleware or route handler
  return NextResponse.next();
}

// Add your protected routes
export const config = {
  matcher: ["/dashboard/:path*"],
};