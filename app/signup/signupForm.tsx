"use client";

import Link from 'next/link';
import { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

// backend signup
//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isSigningUp) {
//       setIsSigningUp(true);
//       setError(null); // Reset previous error
//       try {
//         await doCreateUser(email, password, username)
//         navigate('/home')
//       } catch (error) {
//         if (error instanceof Error) {
//           alert('Error signing up, please enter valid email and password')
//         }
//         setIsSigningUp(false); // Reset signing-in state
//       }
//     }
//   };

  return (
    <div className="flex flex-col justify-center p-20 items-center text-white m-0">
      <h2 className="text-2xl mb-6">Create an account</h2>
      <form>
        <input
          type="firstname"
          name="firstname"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="w-full p-2 mb-2 text-black rounded-md"
        />
        <input
          type="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
          className="w-full p-2 mb-2 text-black rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 mb-2 text-black rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 mb-2 text-black rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 mt-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
        >
          Continue
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login">Login Here</Link>
      </p>
    </div>
  );
}

export default SignupForm;
