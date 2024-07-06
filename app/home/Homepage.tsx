"use client";

import { doSignOut } from "@/firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

function Homepage() {
    const [errMessage, setErrMessage] = useState<string | null>(null); // Initialize errMessage as string or null
    const [isSigningOut, setIsSigningOut] = useState(false);
    const router = useRouter();
    const handleLearn = () => router.push('/student');
    const handleTeach = () => router.push('/teacher');

    const onSignOut = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isSigningOut) {
          setIsSigningOut(true);
          try {
            await doSignOut();
            router.push('/login');
          } catch (error) {
            if (error instanceof Error) {
              setErrMessage(error.message);
            }
            setIsSigningOut(false); // Reset signing-out state
          }
        }
    };

    return (
        <div className="flex flex-col justify-center items-center p-20 text-white">
            <h1 className="text-2xl text-black mb-6">Homepage</h1>
            <h2 className="text-2xl text-black mb-6">What do you want to do today?</h2>
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={handleLearn}
                    className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                >
                    Learn
                </button>
                <button
                    onClick={handleTeach}
                    className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors duration-300 ease-in-out"
                >
                    Teach
                </button>
            </div>
            <button
                onClick={onSignOut}
                className={`bg-red-600 text-white p-2 mt-4 rounded-md ${
                    isSigningOut ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
                {isSigningOut ? 'Signing Out...' : 'Sign Out'}
            </button>
            {errMessage && <p className="text-red-500 mt-2">{errMessage}</p>}
        </div>
    );
}

export default Homepage;
