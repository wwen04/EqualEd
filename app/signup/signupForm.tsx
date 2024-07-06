"use client";

import Link from 'next/link';
import { useState } from 'react';
import { doCreateUser } from '@/firebase/auth';
import { redirect } from 'next/navigation';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accountType, setAccountType] = useState('student'); // Add state for account type


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSigningUp) {
      setIsSigningUp(true);
      setError(null); // Reset previous error
      try {
        await doCreateUser(email, password, firstName, lastName);
        redirect(accountType === 'student'? '/student' : '/teacher');
      } catch (error) {
        if (error instanceof Error) {
          alert('Error signing up, please enter valid email and password')
        }
        setIsSigningUp(false); // Reset signing-in state
      }
    }
  };

  return (
    <div className="flex flex-col justify-center p-20 items-center text-white m-0">
      <h2 className="text-2xl mb-6">Create an account</h2>
      <form onSubmit = { onSubmit }>
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
        <p> Choose your account type: </p>
        <div className="flex justify-items-stretch w-full mb-2 ">
          <button
            type="button"
            className={`p-2 rounded-md ${accountType === 'student' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setAccountType('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`p-2 rounded-md ${accountType === 'teacher' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
            onClick={() => setAccountType('teacher')}
          >
            Teacher
          </button>
        </div>
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
