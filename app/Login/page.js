import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn("google")}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Login with Google
      </button>
    </div>
  );
}
