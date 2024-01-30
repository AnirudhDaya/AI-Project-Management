"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []); // Ensure redirect happens only after initial render

  return (
    // Render something meaningful here, even if it's a loading indicator
    <div>Loading...</div>
  );
}
