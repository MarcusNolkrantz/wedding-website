import Image from "next/image";
import weddingRings from "../../public/wedding-rings.svg";

const programme = [
  {
    day: "Fredag",
    description:
      "Vi inleder helgen tillsammans med en gemensam middag för er som är på plats.",
    dressCode: "Sommarfin",
    events: [
      ["18:00", "Välkomstmiddag"],
    ],
  },
  {
    day: "Lördag",
    description: "Bröllopsdagen!",
    dressCode: "Mörk kostym",
    events: [
      ["14:15", "Gemensam buss till kyrkan från Visby"],
      ["15:00", "Vigsel i Västerhejde kyrka", "", "rings"],
      ["16:00", "Buss till festlokalen"],
      ["16:30", "Välkomna till Nygårds Herrgård"],
      ["18:00", "Bröllopsmiddag",],
      ["22:00", "Fest"],
      ["02:00", "Kvällen rundas av"],
    ],
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-20 space-y-8">
      <h2>Program</h2>
      <p className="mx-auto max-w-xl text-center text-stone-700">
        Här är viktiga tider och händelser under helgen. Mer information och exakta tider kommer senare.
      </p>
      <div className="grid gap-10">
        {programme.map(({ day, description, dressCode, events }) => (
          <article key={day} className="border-t-2 border-[#a7a29a] pt-4">
            <h3 className="text-center text-2xl font-normal text-stone-800">
              {day}
            </h3>
            <div className="mx-auto mt-2 max-w-sm text-center">
              <p className="text-base text-stone-600">{description}</p>
              <dl className="mt-4 py-2 text-sm">
                <div className="flex items-baseline justify-center gap-2">
                  <dt className="font-medium uppercase text-[#7c4a0d]">Klädkod</dt>
                  <dd className="font-semibold text-stone-700">{dressCode}</dd>
                </div>
              </dl>
            </div>
            <ol className="mt-6">
              {events.map(([time, title, detail, icon]) => (
                <li
                  key={`${day}-${time}`}
                  className="grid grid-cols-[5rem_1fr] gap-2 border-t border-[#d6d1c8] py-4"
                >
                  <time className="whitespace-pre-line font-normal tabular-nums text-stone-800">
                    {time}
                  </time>
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-stone-800">
                      <span className="min-w-0">{title}</span>
                      {icon === "rings" && (
                        <Image
                          src={weddingRings}
                          alt=""
                          className="h-7 w-11 shrink-0 object-contain"
                        />
                      )}
                    </h4>
                    {detail && (
                      <p className="mt-1 text-base text-stone-600">{detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}