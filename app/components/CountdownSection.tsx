"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import murImage from "../../public/mur.jpg";

const weddingTime = new Date("2027-05-29T15:00:00+02:00").getTime();

function getRemainingSeconds() {
  return Math.max(0, Math.floor((weddingTime - Date.now()) / 1000));
}

function subscribeToCountdown(callback: () => void) {
  const interval = window.setInterval(callback, 1_000);

  return () => window.clearInterval(interval);
}

export default function CountdownSection() {
  const remainingSeconds = useSyncExternalStore(
    subscribeToCountdown,
    getRemainingSeconds,
    () => 0,
  );
  const days = Math.floor(remainingSeconds / 86_400);
  const hours = Math.floor((remainingSeconds % 86_400) / 3_600);
  const minutes = Math.floor((remainingSeconds % 3_600) / 60);
  const seconds = remainingSeconds % 60;
  const countdownUnits = [
    { label: "Dagar", value: days },
    { label: "Timmar", value: hours },
    { label: "Minuter", value: minutes },
    { label: "Sekunder", value: seconds },
  ];

  return (
    <div className="mx-auto max-w-xl space-y-5 text-center">
      <div className="space-y-1">
        <p className="text-xl font-normal text-[#7c4a0d]">LÖRDAG 29 MAJ 2027</p>
      </div>
      <dl
        aria-label="Tid kvar till bröllopet"
        className="mx-auto grid max-w-md grid-cols-4 gap-2"
      >
        {countdownUnits.map(({ label, value }) => (
          <div key={label} className="border-t border-[#d8a13f] pt-2">
            <dt className="text-xs font-medium uppercase text-stone-500">{label}</dt>
            <dd className="text-2xl font-normal leading-none text-[#7c4a0d]">
              {value}
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