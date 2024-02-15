// middleware.js

import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/auth/sign-in';

  const sessionToken = request.cookies.get('token')?.value || '';

  if(isPublicPath && sessionToken){
    const res = await fetch('http://192.168.29.116:8000/userdetails/', {
      method: 'POST',
      headers: {
        Authorization: `Token ${sessionToken}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      // If a user session exists, redirect to the main page
      console.log('User session');
    return NextResponse.redirect(new URL('/admin/default', request.nextUrl));
    }
  }

  if(!isPublicPath && !sessionToken){
    return NextResponse.redirect(new URL('/auth/sign-in', request.nextUrl));
  }
  
}

// Then apply the middleware
export const config = {
  matcher: ['/','/admin/default','/auth/sign-in']
};
