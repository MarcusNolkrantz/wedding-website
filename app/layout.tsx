import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matilda och Marcus Bröllop",
  description: "Information för gäster som ska fira Matilda och Marcus bröllop.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" suppressHydrationWarning>
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
