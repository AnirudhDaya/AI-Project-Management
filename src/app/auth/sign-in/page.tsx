// <div className="mb-16 mt-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
// <div className="mb-16  flex h-fit w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">

// {/* Sign in section */}
// < className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
'use client';
import InputField from 'components/fields/InputField';
import Default from 'components/auth/variants/DefaultAuthLayout';
import Checkbox from 'components/checkbox';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { NextResponse } from 'next/server';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';



export async function handleSignIn(username: string, password: string, router: AppRouterInstance) {
  
  try {
    const response = await fetch('http://192.168.29.116:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('FAHAD TOKEN', data);
      const setCookie = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      if (setCookie.status === 200) {
        console.log('Cookies set');
        router.push('/admin/default')
      } else {
        console.log('Error cookies setting failed');
      }
    }
  } catch (error) {
    console.error('Failed to sign in:', error);
    console.log('Login Error: ' + error.message);
  }
}

function SignInDefault() {
  const router = useRouter();
  return (
    <Default
      maincard={
        <div className="mb-16  flex h-fit w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
          {/* Sign in section */}
          <div className="w-full mt-[18vh] max-w-[420px] flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
            <h3 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
              Sign In
            </h3>
            <p className="mb-9 ml-1 text-base text-gray-600">
              Enter your username and password to sign in!
            </p>

            <div className="mb-6 flex items-center  gap-3">
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
              {/* <p className="text-base text-gray-600"> or </p> */}
              <div className="h-px w-full bg-gray-200 dark:!bg-navy-700" />
            </div>
            {/* Email */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Username*"
              placeholder="200358"
              id="username"
              type="text"
            />

            {/* Password */}
            <InputField
              variant="auth"
              extra="mb-3"
              label="Password*"
              placeholder="Min. 8 characters"
              id="password"
              type="password"
            />
            {/* Checkbox */}
            <div className="mb-4 flex items-center justify-between px-2">
              <div className="mt-2 flex items-center">
                <Checkbox />
                <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
                  Keep me logged In
                </p>
              </div>
              <a
                className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
                href=" "
              >
                Forgot Password?
              </a>
            </div>
            <button
              className="linear w-full rounded-xl bg-brand-500 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
              onClick={() => {
                const username = document.getElementById(
                  'username',
                ) as HTMLInputElement | null;
                const usernameValue = username.value;
                const password = document.getElementById(
                  'password',
                ) as HTMLInputElement | null;
                const passwordValue = password.value;
                handleSignIn(usernameValue, passwordValue, router);
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      }
    />
  );
}

export default SignInDefault;
