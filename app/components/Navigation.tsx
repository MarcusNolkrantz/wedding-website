  "use client";

  import { useEffect, useState } from "react";

  const navigationItems = [
    { id: "welcome", label: "Välkomna" },
    { id: "schedule", label: "Program" },
    { id: "osa", label: "OSA" },
    { id: "accommodation", label: "Boende" },
    { id: "other", label: "Övrigt" },
  ];

  export default function Navigation() {
    const [activeSection, setActiveSection] = useState("welcome");

    function handleNavigation(id: string) {
      const section = document.getElementById(id);

      if (!section) {
        return;
      }

      setActiveSection(id);
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
      };
    }, []);

    return (
      <>
        <output className="block text-center text-sm text-[#2f6473]">
          selected: {activeSection}
        </output>
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-6 py-4 text-base sm:justify-between sm:text-lg"
        >
          {navigationItems.map(({ id, label }) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                type="button"
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleNavigation(id)}
                onTouchEnd={(event) => {
                  event.preventDefault();
                  handleNavigation(id);
                }}
                className={`touch-manipulation cursor-pointer border-0 bg-transparent p-0 py-1 font-inherit decoration-[#2f6473] decoration-2 underline-offset-4 transition-colors duration-200 ${
                  isActive
                    ? "text-[#1f5362] underline"
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