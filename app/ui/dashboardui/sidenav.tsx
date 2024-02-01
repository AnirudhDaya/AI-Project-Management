"use client";
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboardui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import React from "react";
import { auth } from '@/app/firebase/config';
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { app } from 'firebase-admin';

export default function SideNav() {
  const router = useRouter();
  async function signOutUser() {
    //Sign out with the Firebase client
    await signOut(auth);

    //Clear the cookies in the server
    const response = await fetch("/api/signout", {
      method: "POST",
    });

    if (response.status === 200) {
      router.push("/");
    }
  }
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">PlaceholderLogo</div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md
                             bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 
                             md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-black" />
            <div onClick={signOutUser} className="text-black hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}