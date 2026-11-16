import type { Metadata } from "next";
import ContactForm from "@/Components/ContactForm";
import { AUTHOR_GITHUB, GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions or feedback about this Next.js learning project.",
  alternates: { canonical: "/contact" },
};

const Contact = () => (
  <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
    <div>
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mb-6 text-slate-600">
        Have feedback on this project or found a bug? The quickest way to reach me is on GitHub.
      </p>
      <ul className="space-y-3">
        <li>
          <a href={`${GITHUB_URL}/issues/new`} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 hover:underline">
            Open an issue for this project →
          </a>
        </li>
        <li>
          <a href={AUTHOR_GITHUB} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-700 hover:underline">
            My GitHub profile (codelady-ship) →
          </a>
        </li>
      </ul>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
