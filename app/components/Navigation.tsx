  "use client";

  import { useEffect, useRef, useState } from "react";

  const navigationItems = [
    { id: "welcome", label: "VÄLKOMNA" },
    { id: "schedule", label: "PROGRAM" },
    { id: "osa", label: "OSA" },
    { id: "other", label: "ÖVRIGT" },
  ];

  export default function Navigation() {
    const [clickedButton, setClickedButton] = useState<string | null>(null);
    const feedbackTimeout = useRef<number | null>(null);

    function handleNavigation(id: string) {
      const section = document.getElementById(id);

      if (!section) {
        return;
      }

      if (feedbackTimeout.current !== null) {
        window.clearTimeout(feedbackTimeout.current);
      }

      setClickedButton(id);
      feedbackTimeout.current = window.setTimeout(() => {
        setClickedButton(null);
        feedbackTimeout.current = null;
      }, 500);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    useEffect(() => {
      const header = document.getElementById("site-header");

      if (!header) {
        return;
      }

      const updateHeaderOffset = () => {
        document.documentElement.style.setProperty(
          "--header-offset",
          `${header.getBoundingClientRect().height}px`,
        );
      };

      updateHeaderOffset();
      window.addEventListener("resize", updateHeaderOffset);

      const observer =
        "ResizeObserver" in window
          ? new ResizeObserver(updateHeaderOffset)
          : null;
      observer?.observe(header);

      return () => {
        observer?.disconnect();
        window.removeEventListener("resize", updateHeaderOffset);

        if (feedbackTimeout.current !== null) {
          window.clearTimeout(feedbackTimeout.current);
        }
      };
    }, []);

    return (
      <>
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-6 py-4 text-base sm:justify-between sm:text-lg"
        >
          {navigationItems.map(({ id, label }) => {
            const wasClicked = clickedButton === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => handleNavigation(id)}
                className={`touch-manipulation cursor-pointer border-0 bg-transparent p-0 py-1 font-inherit decoration-[#2f6473] decoration-2 underline-offset-4 transition-colors duration-200 ${
                  wasClicked
                    ? "animate-pulse text-[#1f5362] underline"
                    : "text-stone-700 no-underline"
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </>
    );
  }