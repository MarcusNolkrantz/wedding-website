import Image from "next/image";
import murImage from "../../Images/mur.jpg";

const countdownUnits = ["Dagar", "Timmar", "Minuter", "Sekunder"];

export default function CountdownSection() {
  return (
    <div className="mx-auto max-w-xl space-y-5 text-center">
      <div className="space-y-1">
        <p className="text-xl font-semibold text-[#7c4a0d]">Lördag 29 maj 2027</p>
      </div>
      <dl
        aria-label="Tid kvar till bröllopet"
        className="mx-auto grid max-w-md grid-cols-4 gap-2"
      >
        {countdownUnits.map((label) => (
          <div key={label} className="border-t border-[#d8a13f] pt-2">
            <dt className="text-xs font-medium uppercase text-stone-500">{label}</dt>
            <dd className="text-2xl font-semibold leading-none text-[#7c4a0d]">
              0
            </dd>
          </div>
        ))}
      </dl>
      <p className="mx-auto max-w-lg text-center text-stone-700">
        Välkomna på vårt bröllop! Vi ser fram emot att fira med er.
      </p>
      <Image
            src={murImage}
            alt="Mur på Gotland"
            className="mb-5 aspect-video w-full rounded-lg object-cover ring-1 ring-[#a7a29a] shadow-[0_10px_30px_rgba(63,51,39,0.12)]"
  />
    </div>
  );
}