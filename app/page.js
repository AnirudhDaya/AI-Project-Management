"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  router.push("/login"); // Redirect to login page on component mount

  // return (
  //   <div>
  //     {/* ...other content... */}
  //   </div>
  // );
}
