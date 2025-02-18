"use client";

//shadcn ui
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

//react icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi"; // New icons for inputs
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok) {
      setPending(false);
      toast.success(data.message);
      router.push("/sign-in");
    } else {
      setError(data.message);
      setPending(false);
    }
  };

  const handleProvider = (event, value) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

  return (
    <div className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-[#1b0918] to-[#280d21]">
      <Card className="mt-20 mb-6 w-[95%] sm:w-[420px] p-4 sm:p-4 bg-white backdrop-blur-lg shadow-xl border border-gray/10 rounded-3xl">
        <CardHeader>
          <CardTitle className="text-center text-gray-800 text-2xl font-semibold">
            Create an Account
          </CardTitle>
          <CardDescription className="text-center text-gray-600 text-sm sm:text-base">
            Sign up with email or a provider.
          </CardDescription>
        </CardHeader>
        {!!error && (
          <div className="bg-red-500/10 p-2 rounded-md flex items-center gap-x-2 text-sm text-red-400 mb-4">
            <TriangleAlert />
            <p>{error}</p>
          </div>
        )}
        <CardContent className="px-2 sm:px-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Input
                type="text"
                disabled={pending}
                placeholder="Full Name"
                className="bg-white/20 text-gray-800 placeholder-gray-300 rounded-md pl-10"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <Input
                type="email"
                disabled={pending}
                placeholder="Email"
                className="bg-white/20 text-gray-800 placeholder-gray-300 rounded-md pl-10"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <Input
                type="password"
                disabled={pending}
                placeholder="Password"
                className="bg-white/20 text-gray-800 placeholder-gray-50 rounded-md pl-10"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <Input
                type="password"
                disabled={pending}
                placeholder="Confirm Password"
                className="bg-white/20 text-gray-800 placeholder-gray-300 rounded-md pl-10"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                required
              />
              <HiLockClosed className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Button
              className="w-full bg-purple-800 hover:bg-purple-900 text-white font-medium py-1.5 rounded-lg transition-all"
              size="lg"
              disabled={pending}
            >
              SignUp Free
            </Button>
          </form>

          <Separator className="bg-white/20 my-3" />

          <div className="flex justify-center gap-4">
            <Button
              onClick={(e) => handleProvider(e, "google")}
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 text-gray-800 hover:bg-white/20 transition-all rounded-md"
            >
              <FcGoogle className="size-6" />
              Google
            </Button>
            <Button
              onClick={(e) => handleProvider(e, "github")}
              variant="outline"
              size="lg"
              className="flex items-center gap-2 bg-white/10 text-gray-800 hover:bg-white/20 transition-all rounded-md"
            >
              <FaGithub className="size-6 text-gray-800" />
              GitHub
            </Button>
          </div>

          <p className="text-center text-sm mt-4 text-gray-800">
            Already have an account?
            <Link
              className="text-blue-900 ml-2 hover:underline transition-all"
              href="sign-in"
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
