import Link from "next/link";
import type { IUser } from "@/Interface/User";

type Props = { user: IUser; href: string };

const UserCard = ({ user, href }: Props) => (
  <li>
    <Link
      href={href}
      className="group block h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-indigo-600"
    >
      <div className="mb-3 flex items-center gap-3">
        <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          {user.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <h2 className="truncate font-semibold text-slate-900 group-hover:text-indigo-700">{user.name}</h2>
          <p className="truncate text-sm text-slate-500">@{user.username}</p>
        </div>
      </div>
      <p className="truncate text-sm text-slate-600">{user.email}</p>
      <p className="truncate text-sm text-slate-500">{user.company?.name}</p>
      <span className="mt-3 inline-block text-sm font-medium text-indigo-700">View details →</span>
    </Link>
  </li>
);

export const UserCardSkeleton = () => (
  <li aria-hidden className="h-[164px] animate-pulse rounded-xl border border-slate-200 bg-white p-5">
    <div className="mb-3 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-slate-200" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-3/4 rounded bg-slate-200" />
        <div className="h-3 w-1/2 rounded bg-slate-200" />
      </div>
    </div>
    <div className="h-3 w-2/3 rounded bg-slate-200" />
  </li>
);

export default UserCard;
