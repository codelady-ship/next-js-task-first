import type { Metadata } from "next";
import NextImage from "next/image";
import desk from "@/assets/desk.webp";
import code from "@/assets/code.webp";

export const metadata: Metadata = {
  title: "next/image examples",
  description: "Four ways to use the Next.js Image component: a priority image, a responsive fill box, a remote image and a fixed-size SVG.",
  alternates: { canonical: "/image" },
};

const Example = ({ title, children, note }: { title: string; children: React.ReactNode; note: React.ReactNode }) => (
  <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
    {children}
    <div className="p-5">
      <h2 className="mb-1 font-semibold text-slate-900">{title}</h2>
      <p className="text-sm leading-relaxed text-slate-600">{note}</p>
    </div>
  </section>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <code className="rounded bg-slate-100 px-1 text-[0.85em]">{children}</code>
);

const ImagePage = () => (
  <>
    <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
      <span translate="no">next/image</span> examples
    </h1>
    <p className="mb-8 max-w-2xl text-slate-600">
      The Image component resizes pictures, converts them to modern formats and lazy-loads them. Each card below shows
      one common setup.
    </p>

    <div className="grid gap-6 md:grid-cols-2">
      <Example
        title="1. Static import with priority"
        note={
          <>
            The file is imported, so Next.js knows its size and creates a blurred placeholder (<Code>placeholder=&quot;blur&quot;</Code>).{" "}
            <Code>priority</Code> preloads it because it is at the top of the page.
          </>
        }
      >
        <NextImage
          src={desk}
          alt="Laptop with code on a white desk next to a monitor, a mug and headphones"
          placeholder="blur"
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </Example>

      <Example
        title="2. Fill a responsive box"
        note={
          <>
            With <Code>fill</Code> the image covers its parent (here a 16:9 box), and <Code>sizes</Code> tells the browser which
            width to download. It is lazy-loaded by default.
          </>
        }
      >
        <div className="relative aspect-video">
          <NextImage
            src={code}
            alt="Close-up of colourful source code on a dark editor screen"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </Example>

      <Example
        title="3. Remote image"
        note={
          <>
            Images from another domain must be allowed in <Code>next.config.ts</Code> with <Code>images.remotePatterns</Code>.
            Width and height are required because Next.js cannot read the file at build time.
          </>
        }
      >
        <NextImage
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80"
          alt="Source code on a monitor, loaded from Unsplash and shown in greyscale"
          width={1200}
          height={801}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full grayscale"
        />
      </Example>

      <Example
        title="4. Fixed-size SVG"
        note={
          <>
            Small logos and icons can use a fixed <Code>width</Code> and <Code>height</Code>. SVG files are served as they are,
            without resizing.
          </>
        }
      >
        <div className="grid aspect-video place-items-center bg-slate-50">
          <NextImage src="/next.svg" alt="Next.js logo" width={180} height={37} />
        </div>
      </Example>
    </div>

    <p className="mt-6 text-xs text-slate-500">
      Photos from{" "}
      <a href="https://unsplash.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
        Unsplash
      </a>
      .
    </p>
  </>
);

export default ImagePage;
