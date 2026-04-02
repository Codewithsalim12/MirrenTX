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
import {
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  TriangleAlert,
  UserPlus,
  Sparkles,
  Shield,
  ArrowRight,
} from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2) {
      toast.error("Name must be at least 2 characters long.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setPending(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.ok) {
      setPending(false);
      
      // Auto-login after successful registration
      const signInRes = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (signInRes?.ok) {
        toast.success("Account created! Welcome to MirRenTX.");
        router.push("/");
      } else {
        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      }
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-12 bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-lg">
        <Card className="bg-white/80 backdrop-blur-xl border border-purple-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[32px] overflow-hidden">
          {/* Header Section */}
          <div className="relative p-8 text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-200 ring-4 ring-purple-50">
                <UserPlus className="w-7 h-7 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Create Account
            </CardTitle>
            <CardDescription className="text-gray-500 text-base font-medium">
              Join MirRenTX and start renting today
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
            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FaUser className="w-4 h-4 text-gray-300 group-focus-within:text-purple-600 transition-colors duration-300" />
                  </div>
                  <Input
                    type="text"
                    disabled={pending}
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="pl-11 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                  />
                </div>
              </div>

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
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="pl-11 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative group">
                    <Input
                      type={showPassword ? "text" : "password"}
                      disabled={pending}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      required
                      className="pl-4 pr-11 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-purple-600 transition-colors duration-300"
                    >
                      {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Confirm</label>
                  <div className="relative group">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      disabled={pending}
                      placeholder="••••••••"
                      value={form.confirmPassword}
                      onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                      required
                      className="pl-4 pr-11 h-13 bg-gray-50/50 border-gray-100 rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:border-purple-200 transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-purple-600 transition-colors duration-300"
                    >
                      {showConfirmPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sign Up Button */}
              <Button
                type="submit"
                disabled={pending}
                className="w-full h-14 mt-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-purple-100 border-0 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="flex items-center justify-center gap-3">
                  {pending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
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
                  Social Connect
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
                Sign up with Google
              </Button>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-gray-500 font-medium text-sm">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-purple-600 hover:text-purple-700 font-black hover:underline transition-all duration-300"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-[0.15em] opacity-60">
            <Shield className="w-4 h-4" />
            <span>Secure Registration</span>
            <Sparkles className="w-4 h-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
