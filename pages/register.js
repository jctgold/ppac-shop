import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function RegisterScreen() {
  return (
    <Layout title="Create Account">
      <div className="flex flex-col p-12 w-full justify-center gap-6 h-screen">
        <h1 className="section-title">Create Account</h1>
        <form className="self-center flex flex-col gap-5 w-full md:w-96">
          <input
            placeholder="Name"
            type="text"
            id="fullName"
            className="input-box"
          />
          <input
            placeholder="Email"
            type="email"
            id="email"
            className="input-box"
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="input-box"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            className="input-box"
          />
          <button className="primary-button">Create Account</button>
        </form>

        <p className="text-center text-sm mt-3">
          Already have an account?{' '}
          <span className="font-medium">
            <Link href="/sign-in">
              <a>Sign in here!</a>
            </Link>
          </span>
        </p>
      </div>
    </Layout>
  );
}
