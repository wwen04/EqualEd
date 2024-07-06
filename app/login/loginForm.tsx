"use client";
import { useState } from "react";
import Link from "next/link";

function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isTeacher, set] = useState(false);

    return (
        <div className="flex flex-col justify-center p-20 items-center text-white m-0">
            <form className="flex flex-col">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password: "
                    required
                />
                <button
                    type="submit"
                    disabled={isSigningIn}
                    className={`bg-blue-500 text-white p-2 rounded-lg ${isSigningIn ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 transition duration-300'}`}
                >
                    {isSigningIn ? 'Signing In...' : 'Login'}
                </button>
            </form>
            <p className="mt-4">
                Don't have an account?{' '}
                <Link href="/signup">Sign up</Link>
            </p>
            <p className="mt-2">
                Forgot your password?{' '}
                <Link href="/resetPassword">Reset password</Link>
            </p>
        </div>
       
       

    );

    
}

export default LoginForm;