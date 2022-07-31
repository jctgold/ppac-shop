import React from 'react';
import Layout from './Layout';

export default function NotFound({ title, message }) {
  return (
    <Layout title={title}>
      <div className="mt-16 p-12 flex flex-col gap-4 justify-center text-center">
        <div className="uppercase font-semibold">{title}</div>
        <div>{message}</div>
      </div>
    </Layout>
  );
}
