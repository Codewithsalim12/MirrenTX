"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign-in"); // Redirect if not logged in
    } else if (status === "authenticated") {
      setIsAuthChecked(true); // Allow rendering only after authentication check
    }
  }, [status, router]);

  if (!isAuthChecked) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Verifying authentication...
          </p>
        </div>
      </div>
    );
  }

  return children;
}
