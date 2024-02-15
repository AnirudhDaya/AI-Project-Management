// "use client"
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

// export default function Home({}) {
//   const router = useRouter();

//   useEffect(() => {
//     async function checkSession() {
//       const tokenResponse =  await fetch('/api/login', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       if(tokenResponse.status == 200){

//         const token = await tokenResponse.json();
//         console.log("Acquired ",token.token.value);
//         const res = await fetch('http://192.168.29.116:8000/userdetails/', {
//           method: 'POST',
//           headers: {
//             Authorization: `Token ${token.token.value}` 
//           },
//         });
//         if (res.ok) {
//           const data = await res.json();
//           // If a user session exists, redirect to the main page
//           console.log("User session");
//           router.push('/admin/default');
//         } else {
//           // If no user session exists, redirect to the sign-in page
//           console.log(res.headers);
//           router.push('/auth/sign-in');
//         }   
//       }
//       else{
//         // If no user session exists, redirect to the sign-in page
//         console.log("No cookies");
//         router.push('/auth/sign-in');
//       }
//     }

//     checkSession();
//   }, []);

//   return null;
// }
import { redirect } from 'next/navigation';
export default function Home({}) {
  redirect('/admin/default');
}