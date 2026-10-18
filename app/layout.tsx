import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matilda och Marcus Bröllop",
  description: "Information for guests attending Matilda and Marcus's wedding.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`
            if ("scrollRestoration" in history) {
              history.scrollRestoration = "manual";
            }

            const navigation = performance.getEntriesByType("navigation")[0];
            if (navigation?.type === "reload") {
              history.replaceState(null, "", location.pathname + location.search);
              window.scrollTo(0, 0);
            }

          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
