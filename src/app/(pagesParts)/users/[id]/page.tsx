import type { Metadata } from "next";
import UserClient from "@/Components/UserClient";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `User #${id} (CSR)`,
    description: "User details fetched in the browser with a Client Component.",
    alternates: { canonical: `/users/${id}` },
  };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  return <UserClient id={id} />;
};

export default Page;
