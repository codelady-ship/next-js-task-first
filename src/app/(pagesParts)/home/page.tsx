import type { Metadata } from "next";
import Link from "next/link";
import { getUsers } from "@/lib/users";
import UserCard from "@/Components/UserCard";
import RenderNote from "@/Components/RenderNote";

// Render on every request so the page is a real SSR example (no static caching).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Users rendered on the server (SSR)",
  description: "Ten users fetched on the server with a Next.js async Server Component and sent to the browser as ready HTML.",
  alternates: { canonical: "/home" },
};

const Home = async () => {
  const users = await getUsers();
  const renderedAt = new Date().toISOString().replace("T", " ").slice(0, 19);

  return (
    <>
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Users — server-side rendering</h1>
      <p className="mb-6 max-w-2xl text-slate-600">
        The same list as the <Link href="/users" className="font-medium text-indigo-700 hover:underline">CSR page</Link>, loaded a different way.
      </p>

      <RenderNote mode="SSR" stamp={<>Rendered on the server at {renderedAt} UTC (reload to see it change).</>}>
        <p>
          This page is an async Server Component. <code className="rounded bg-white px-1">fetch()</code> runs on the server, so the
          browser receives finished HTML with all users in it — no loading spinner, and search engines see the content.
        </p>
        <p>Cards link to <code className="rounded bg-white px-1">/home/[id]</code>, which is also rendered on the server.</p>
      </RenderNote>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} href={`/home/${user.id}`} />
        ))}
      </ul>
    </>
  );
};

export default Home;
