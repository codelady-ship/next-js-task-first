import type { Metadata } from "next";
import Link from "next/link";
import UsersClient from "@/Components/UsersClient";

export const metadata: Metadata = {
  title: "Users rendered in the browser (CSR)",
  description: "The same ten users fetched in the browser with useEffect, showing loading and error states.",
  alternates: { canonical: "/users" },
};

const Users = () => (
  <>
    <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Users — client-side rendering</h1>
    <p className="mb-6 max-w-2xl text-slate-600">
      The same list as the <Link href="/home" className="font-medium text-indigo-700 hover:underline">SSR page</Link>, loaded a different way.
    </p>
    <UsersClient />
  </>
);

export default Users;
