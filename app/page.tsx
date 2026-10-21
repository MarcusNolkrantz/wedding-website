import Image from "next/image";
import Navigation from "./components/Navigation";
import HomeSection from "./components/HomeSection";
import OtherSection from "./components/OtherSection";
import RsvpSection from "./components/RsvpSection";
import ScheduleSection from "./components/ScheduleSection";
import SectionDivider from "./components/SectionDivider";
import weddingImage from "../public/matildaochmarcus.png";
import kapstadenImage from "../public/Kapstaden.jpeg";

export default function Home() {
  return (
    <>
      <header
        id="site-header"
        className="sticky top-0 z-10 border-b border-[#a7a29a] bg-[#faf6ef]"
      >
        <h1
          className="mx-auto max-w-3xl px-6 pt-4 text-center text-2xl leading-tight sm:text-4xl"
        >
          Matilda och Marcus
        </h1>
        <p className="mx-auto max-w-3xl px-6 pt-1 text-center text-sm font-medium uppercase text-[#4f6145]">
          Västerhejde kyrka, Gotland
        </p>
        <Navigation />
      </header>

      <main className="mx-auto max-w-3xl px-6 pb-56 pt-12">
        <Image
          src={weddingImage}
          alt="Matilda och Marcus"
          className="mx-auto mb-24 h-auto w-full max-w-3xl"
          priority
        />
        <HomeSection />
        <SectionDivider />
        <ScheduleSection />
        <SectionDivider />
        <RsvpSection />
        <SectionDivider />
        <OtherSection />
        <SectionDivider />
        <Image
          src={kapstadenImage}
          alt="Utsikt över Kapstaden"
          className="mx-auto aspect-4/3 w-full max-w-2xl rounded-lg object-cover ring-1 ring-[#a7a29a] shadow-[0_10px_30px_rgba(63,51,39,0.12)]"
        />
      </main>
    </>
  );
}
