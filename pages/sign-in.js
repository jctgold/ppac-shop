import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function SigninScreen() {
  return (
    <Layout title="Login">
      <div className="flex flex-col p-12 w-full justify-center gap-6 h-screen">
        <h1 className="section-title">Log in</h1>
        <form className="self-center flex flex-col gap-5">
          <input
            placeholder="Email"
            type="email"
            id="email"
            className="input-box w-full md:w-96"
          />
          <input
            placeholder="Password"
            type="password"
            id="password"
            className="input-box w-full md:w-96"
          />
          <button className="primary-button">Log in</button>
        </form>

        <p className="text-center text-sm mt-3">
          Don&apos;t have an account?{' '}
          <span className="font-medium">
            <Link href="/register">
              <a>Register here!</a>
            </Link>
          </span>
        </p>
      </div>
    </Layout>
  );
}
