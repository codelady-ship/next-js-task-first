import { ImageResponse } from "next/og";

export const alt = "Next.js Rendering Demo: SSR vs CSR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0f172a",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 34, color: "#a5b4fc" }}>Next.js App Router</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 12 }}>SSR vs CSR</div>
        <div style={{ fontSize: 34, color: "#cbd5e1", marginTop: 24 }}>
          The same user list, rendered on the server and in the browser.
        </div>
      </div>
    ),
    size,
  );
}
