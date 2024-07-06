"use client";
import { useState } from "react";
import Link from "next/link";
import { doSignInWithEmailAndPassword } from "@/firebase/auth";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        router.push("/home");
      } catch (error) {
        if (error instanceof Error) {
          alert("Error: Invalid credentials");
        }
        setIsSigningIn(false); // Reset signing-in state
      }
    }
  };

  return (
    <div className="rounded-2xl shadow-lg md:mt-0 sm:max-w-md xl:p-0 bg-gray-300/75">
      <div className="flex flex-col justify-center p-20 items-center text-white m-0">
        <h1 className="text-black text-5xl mb-6 font-serif">EqualEd</h1>
        <form className="flex flex-col " onSubmit={onSubmit}>
          <div className="flex items-center w-full mb-2 p-2 bg-white rounded-lg">
            <FaEnvelope className="text-black ml-2 mr-4" />
            <input
              className="w-full text-black mb-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="flex items-center w-full mb-2 p-2 bg-white rounded-lg">
            <FaLock className="text-black ml-2 mr-4" />
            <input
              className="w-full text-black mb-2 "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password: "
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSigningIn}
            className={`bg-green-500 text-white p-2 mt-2 rounded-lg ${
              isSigningIn
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-green-700 transition duration-300"
            }`}
          >
            {isSigningIn ? "Signing In..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-black">
          Don't have an account?{" "}
          <Link href="/signup" className="text-green-700 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="mt-4 text-black">
          Forgot password?{" "}
          <Link
            href="/resetPassword"
            className="text-green-700 hover:underline "
          >
            Reset password
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
