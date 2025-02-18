"use client";

// shadcn/ui components
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.push("/");
      toast.success("Login successful!");
    } else if (res?.status === 401) {
      setError("Invalid Credentials");
      setPending(false);
    } else {
      setError("Something went wrong");
    }
  };

  const handleProvider = (event, value) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#1b0918] to-[#280d21]">
      <Card className=" mt-16 w-full max-w-md p-6 sm:p-8 shadow-xl border border-border/40 rounded-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-gray-900 text-2xl font-semibold">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-sm text-center text-gray-500">
            Sign in with your email or social account
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 mb-4">
            <TriangleAlert />
            <p>{error}</p>
          </div>
        )}
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              disabled={pending}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-lg"
            />
            <Input
              type="password"
              disabled={pending}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-lg"
            />
            <Button
              className="w-full bg-[#6a0dad] hover:bg-[#5a0da5] text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              size="lg"
              disabled={pending}
            >
              Sign In
            </Button>
          </form>

          <Separator />

          <div className="flex justify-center gap-4">
            <Button
              onClick={(e) => handleProvider(e, "google")}
              variant="outline"
              size="lg"
              className="border border-gray-300 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 transition-transform transform hover:scale-110"
            >
              <FcGoogle className="size-6" />
            </Button>
            <Button
              onClick={(e) => handleProvider(e, "github")}
              variant="outline"
              size="lg"
              className="border border-gray-300 bg-white hover:bg-gray-100 shadow-md rounded-full p-2 transition-transform transform hover:scale-110"
            >
              <FaGithub className="size-6 text-gray-800" />
            </Button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <Link
              className="text-purple-600 hover:underline font-medium"
              href="/sign-up"
            >
              Create one
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
