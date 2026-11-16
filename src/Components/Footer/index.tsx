import Link from "next/link";
import { AUTHOR_GITHUB, GITHUB_URL } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          Built by{" "}
          <a href={AUTHOR_GITHUB} className="font-medium text-indigo-700 hover:underline" target="_blank" rel="noopener noreferrer">
            Antiqa (codelady-ship)
          </a>{" "}
          as a <span translate="no">Next.js</span> learning project. User data from{" "}
          <a href="https://jsonplaceholder.typicode.com/" className="hover:underline" target="_blank" rel="noopener noreferrer" translate="no">
            JSONPlaceholder
          </a>
          .
        </p>
        <ul className="flex flex-wrap gap-4">
          <li><Link href="/home" className="hover:text-slate-900">SSR</Link></li>
          <li><Link href="/users" className="hover:text-slate-900">CSR</Link></li>
          <li><Link href="/image" className="hover:text-slate-900">Images</Link></li>
          <li>
            <a href={GITHUB_URL} className="hover:text-slate-900" target="_blank" rel="noopener noreferrer">Source code</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
