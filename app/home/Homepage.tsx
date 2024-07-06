"use client";

import { doSignOut } from "@/firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaChalkboardTeacher, FaBook } from 'react-icons/fa';

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
            <h2 className="text-5xl font-serif text-black mb-6 pb-10 ">Who's logging in today?</h2>
            <div className="flex flex-row mb-4 mt-6 gap-16">
                <button
                    onClick={handleLearn}
                    className=" text-black h-80 w-60 p-2 rounded-2xl transition-colors duration-300 ease-in-out hover:animate-pulse 
                    flex flex-col items-center justify-center font-serif border-2 border-transparent hover:border-gray-500 "
                >
                  <FaBook className="text-gray-700 mb-4" size={60} />
                  <span className="text-3xl">Student</span>
                </button>
                
                <button
                    onClick={handleTeach}
                    className=" text-black p-2 w-60 h-80 rounded-2xl transition-colors duration-300 ease-in-out hover:animate-pulse 
                    flex flex-col items-center justify-center font-serif border-2 border-transparent hover:border-gray-500"
                >
                  <FaChalkboardTeacher className="text-gray-700 mb-4" size={60} /> 
                  <span className='text-3xl'>Teacher</span>
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
