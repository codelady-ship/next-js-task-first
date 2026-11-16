"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { IUser } from "@/Interface/User";
import { API_URL } from "@/lib/users";
import UserDetails from "@/Components/UserDetails";
import RenderNote from "@/Components/RenderNote";

type State = { status: "loading" } | { status: "missing" } | { status: "error"; message: string } | { status: "done"; user: IUser };

const UserClient = ({ id }: { id: string }) => {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    if (!/^\d+$/.test(id)) {
      setState({ status: "missing" });
      return;
    }
    fetch(`${API_URL}/${id}`, { signal: controller.signal })
      .then(async (res) => {
        if (res.status === 404) return setState({ status: "missing" });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const user: IUser = await res.json();
        if (!user?.id) return setState({ status: "missing" });
        setState({ status: "done", user });
        document.title = `${user.name} (CSR) | Next.js Rendering Demo`;
      })
      .catch((err: Error) => {
        if (err.name !== "AbortError") setState({ status: "error", message: err.message });
      });
    return () => controller.abort();
  }, [id]);

  return (
    <>
      <Link href="/users" className="mb-4 inline-block text-sm font-medium text-indigo-700 hover:underline">← All users (CSR)</Link>
      <h1 className="mb-6 text-3xl font-bold tracking-tight">
        {state.status === "done" ? state.user.name : state.status === "missing" ? "User not found" : `User #${id}`}
      </h1>
      <RenderNote mode="CSR">
        <p>
          The server only sent the page shell. Your browser requested user #{id} after the page loaded, then React filled
          in the details below.
        </p>
      </RenderNote>
      {state.status === "loading" && (
        <div aria-busy className="h-48 animate-pulse rounded-xl border border-slate-200 bg-white" />
      )}
      {state.status === "missing" && (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700">
          There is no user with id “{id}”. JSONPlaceholder has users 1 to 10.
        </p>
      )}
      {state.status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800">Could not load the user: {state.message}</p>
      )}
      {state.status === "done" && <UserDetails user={state.user} />}
    </>
  );
};

export default UserClient;
