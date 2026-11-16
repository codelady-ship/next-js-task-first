"use client";
import { useEffect, useState } from "react";
import type { IUser } from "@/Interface/User";
import { API_URL } from "@/lib/users";
import UserCard, { UserCardSkeleton } from "@/Components/UserCard";
import RenderNote from "@/Components/RenderNote";

type State = { status: "loading" } | { status: "error"; message: string } | { status: "done"; users: IUser[]; at: string };

const UsersClient = () => {
  const [state, setState] = useState<State>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });
    fetch(API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((users: IUser[]) => setState({ status: "done", users, at: new Date().toLocaleTimeString() }))
      .catch((err: Error) => {
        if (err.name !== "AbortError") setState({ status: "error", message: err.message });
      });
    return () => controller.abort();
  }, [attempt]);

  return (
    <>
      <RenderNote
        mode="CSR"
        stamp={state.status === "done" ? <>Fetched in your browser at {state.at}.</> : undefined}
      >
        <p>
          This page is a Client Component. The server sends an empty shell, then <code className="rounded bg-white px-1">useEffect</code>{" "}
          calls the API from your browser. You see skeleton cards while it loads, and the users are not in the initial HTML.
        </p>
        <p>Cards link to <code className="rounded bg-white px-1">/users/[id]</code>, which is also fetched in the browser.</p>
      </RenderNote>

      {state.status === "error" ? (
        <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-800">
          <p className="font-medium">Could not load users: {state.message}</p>
          <button type="button" onClick={() => setAttempt((n) => n + 1)} className="mt-3 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            Try again
          </button>
        </div>
      ) : (
        <ul aria-busy={state.status === "loading"} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {state.status === "loading"
            ? Array.from({ length: 8 }, (_, i) => <UserCardSkeleton key={i} />)
            : state.users.map((user) => <UserCard key={user.id} user={user} href={`/users/${user.id}`} />)}
        </ul>
      )}
    </>
  );
};

export default UsersClient;
