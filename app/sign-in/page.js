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
import {
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TriangleAlert, Sparkles, Shield, ArrowRight } from "lucide-react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      const urlParams = new URLSearchParams(window.location.search);
      const callbackUrl = urlParams.get('callbackUrl') || "/";
      router.push(callbackUrl);
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
    const urlParams = new URLSearchParams(window.location.search);
    const callbackUrl = urlParams.get('callbackUrl') || "/";
    signIn(value, { callbackUrl });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/80 backdrop-blur-xl border border-purple-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[32px] overflow-hidden">
          {/* Header Section */}
          <div className="relative p-8 text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg shadow-purple-200 ring-4 ring-purple-50">
                <Shield className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-500 text-base font-medium">
              Sign in to manage your rentals
            </CardDescription>
          </div>

          {/* Error Message */}
          {!!error && (
            <div className="mx-8 mb-4 p-4 rounded-2xl bg-red-50 border border-red-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-3 text-red-600">
                <TriangleAlert className="w-5 h-5 flex-shrink-0" />
                <p className="font-bold text-sm">{error}</p>
              </div>
            </div>
          )}

          <CardContent className="p-8 pt-4 space-y-5">
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaEnvelope className="w-4 h-4 text-gray-300 group-focus-within:text-purple-600 transition-colors duration-300" />
                  </div>
                  <Input
                    type="email"
                    disabled={pending}
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-11 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaLock className="w-4 h-4 text-gray-300 group-focus-within:text-purple-600 transition-colors duration-300" />
                  </div>
                  <Input
                    type={showPassword ? "text" : "password"}
                    disabled={pending}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-11 pr-12 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-purple-600 transition-colors duration-300"
                  >
                    {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                disabled={pending}
                className="w-full h-14 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-purple-100 border-0 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center justify-center gap-3">
                  {pending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Secure Sign In
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </Button>
            </form>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center px-2">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-white text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                  Trust & Security
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="w-full">
              <Button
                onClick={(e) => handleProvider(e, "google")}
                variant="outline"
                className="w-full h-13 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl border-0 shadow-lg transition-all duration-300 hover:scale-[1.01]"
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                Sign in with Google
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <p className="text-gray-500 font-medium text-sm">
                New to MirRenTX?{" "}
                <Link
                  href="/sign-up"
                  className="text-purple-600 hover:text-purple-700 font-black hover:underline transition-all duration-300"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-[0.15em] opacity-60">
            <Sparkles className="w-4 h-4" />
            <span>256-bit Secure Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
