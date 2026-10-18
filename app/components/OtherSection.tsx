import Image from "next/image";
import raukImage from "../../public/rauk.jpg";
import AccommodationSection from "./AccommodationSection";

export default function OtherSection() {
  return (
    <section id="other" className="scroll-mt-20 space-y-6">
      <h2>Övrigt</h2>
      <p>
        Lorem ipsum dolor sita amet, consectetur adipiscing elit. Duis sagittis
        ipsum praesent mauris fusce nec tellus sed augue semper porta. Mauris
        massa vestibulum lacinia arcu eget nulla.
      </p>
      <h3 className="pt-6 text-2xl font-semibold leading-tight">Resa</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
      </p>
      <Image
        src={raukImage}
        alt="Rauk på Gotland"
        className="mx-auto aspect-4/3 w-full max-w-2xl rounded-lg object-cover ring-1 ring-[#a7a29a] shadow-[0_10px_30px_rgba(63,51,39,0.12)]"
      />
      <AccommodationSection />
      <h3 className="pt-6 text-2xl font-semibold leading-tight">Klädsel</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
        praesent libero sed cursus ante dapibus diam. Sed nisi nulla quis sem at
        nibh elementum imperdiet.
      </p>
    </section>
  );
}