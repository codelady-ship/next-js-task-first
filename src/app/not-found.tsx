import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const NotFound = () => (
  <div className="mx-auto max-w-md py-16 text-center">
    <p className="text-sm font-semibold text-indigo-700">404</p>
    <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
    <p className="mt-3 text-slate-600">This page does not exist. Try one of the demo pages instead.</p>
    <div className="mt-6 flex justify-center gap-3">
      <Link href="/home" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        SSR users
      </Link>
      <Link href="/users" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-white">
        CSR users
      </Link>
    </div>
  </div>
);

export default NotFound;
