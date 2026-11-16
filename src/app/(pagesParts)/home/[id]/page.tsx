import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getUser } from "@/lib/users";
import UserDetails from "@/Components/UserDetails";
import RenderNote from "@/Components/RenderNote";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) notFound();
  return {
    title: `${user.name} (SSR)`,
    description: `Details for ${user.name}, rendered on the server with Next.js.`,
    alternates: { canonical: `/home/${id}` },
  };
}

const UserDetail = async ({ params }: Props) => {
  const { id } = await params;
  const user = await getUser(id);
  if (!user) notFound();

  return (
    <>
      <Link href="/home" className="mb-4 inline-block text-sm font-medium text-indigo-700 hover:underline">← All users (SSR)</Link>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">{user.name}</h1>
      <RenderNote mode="SSR">
        <p>
          The server fetched user #{user.id} before sending this page, and the page title and description were generated
          from the same data with <code className="rounded bg-white px-1">generateMetadata</code>.
        </p>
      </RenderNote>
      <UserDetails user={user} />
    </>
  );
};

export default UserDetail;
