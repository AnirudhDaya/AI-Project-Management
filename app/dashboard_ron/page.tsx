
// "use client";
// import React from "react";
// import { auth } from "../firebase/config";
// import { signOut } from "firebase/auth";
// import { useRouter } from "next/navigation";

// export default function dashboard() {
//   const router = useRouter();
//   async function signOutUser() {
//     //Sign out with the Firebase client
//     await signOut(auth);

//     //Clear the cookies in the server
//     const response = await fetch("/api/signout", {
//       method: "POST",
//     });

//     if (response.status === 200) {
//       router.push("/");
//     }
//   }
//   return (
//     <div>
//       protected route <br />
//       <button onClick={signOutUser}>sign out</button>
//     </div>
//   );
// };

