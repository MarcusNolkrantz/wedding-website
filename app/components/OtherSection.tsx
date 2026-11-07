import Image from "next/image";
import RiksgransenImage from "../../public/Riksgransen.jpeg";
import AccommodationSection from "./AccommodationSection";

export default function OtherSection() {
  return (
    <section id="other" className="scroll-mt-20 space-y-6">
      <h2>Övrigt</h2>
      <p className="text-center">
        Här har vi samlat information om resa, boende och annan praktisk information inför bröllopet.
      </p>
      <h3 className="pt-6 text-2xl font-semibold leading-tight">Resa</h3>
      <p>
        Enklast reser man till Visby med färja. Destination Gotland har släppt turerna för våren. Vi rekommenderar att boka redan nu, då de populära avgångarna kan sälja slut. Glöm inte att använda rabattkoden som finns i den fysiska inbjudan. Koden är giltig mellan 22 maj och 6 juni.
        <br />
        <br />
        <b>OBS:</b> Ni behöver inte ta med er bil över. Vi ordnar gemensam transport från Visby under lördagen.
          
      </p>
      <Image
        src={RiksgransenImage}
        alt="Matilda och Marcus i Riksgransen"
        className="mx-auto aspect-4/3 w-full max-w-xl rounded-lg object-cover ring-1 ring-[#a7a29a] shadow-[0_10px_30px_rgba(63,51,39,0.12)]"
      />
      <AccommodationSection />
      <h3 className="pt-6 text-2xl font-semibold leading-tight">Presenter</h3>
      <p>
        Att ni kommer och firar vår bröllopsdag är det viktigaste för oss. Vi vill inte ha några presenter. Om ni ändå vill ge något så kommer vi starta en insamling till Cancerfonden.
      </p>
    </section>
  );
}