import type { IUser } from "@/Interface/User";

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <dt className="text-sm font-medium text-slate-500">{label}</dt>
    <dd className="mt-1 break-words text-slate-900">{children}</dd>
  </div>
);

/** Shared detail view used by both the SSR (/home/[id]) and CSR (/users/[id]) pages. */
const UserDetails = ({ user }: { user: IUser }) => (
  <dl className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
    <Row label="Full name">{user.name}</Row>
    <Row label="Username">@{user.username}</Row>
    <Row label="Email">{user.email}</Row>
    <Row label="Phone">{user.phone}</Row>
    <Row label="Address">
      {user.address?.street}
      {user.address?.suite ? `, ${user.address.suite}` : ""}, {user.address?.city}
    </Row>
    <Row label="Company">{user.company?.name}</Row>
  </dl>
);

export default UserDetails;
