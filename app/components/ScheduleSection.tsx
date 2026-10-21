import Image from "next/image";
import weddingRings from "../../public/wedding-rings.svg";

const programme = [
  {
    day: "Fredag",
    description: "Vi inleder helgen tillsammans med en gemensam middag för er som är på plats.",
    events: [
      ["18:00-\n20:00", "Gemensam middag", "Vi bjuder in till middag på restaurang Placeholder i Visby."],
    ],
  },
  {
    day: "Lördag",
    description: "Bröllopsdagen!",
    events: [
      ["14:15", "Transport till kyrkan", "Tåg avgår från hotell Placeholder mot Västerhejde kyrka."],
      ["15.00", "Vigsel i Västerhejde kyrka", "", "rings"],
      ["16.00", "Transport till festlokalen", "Tåget går vidare mot Nygårds Herrgård"],
      ["16.30", "Välkommna till Nygårds Herrgård", "Här serveras dryck och tilltugg innan middagen"],
      ["18:00", "Bröllopsmiddag",],
      ["22.00", "Brudvisning", "Enligt gotländsk tradition."],
      ["02:00", "Avslutning", "Kvällen rundas av."],
    ],
  },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="scroll-mt-20 space-y-8">
      <h2>Program</h2>
      <p className="mx-auto max-w-xl text-center text-stone-700">
        Här är viktiga tider och händelser under helgen. Eventuella ändringar kan komma att göras närmare inpå bröllopet.
      </p>
      <div className="grid gap-10">
        {programme.map(({ day, description, events }) => (
          <article key={day} className="border-t-2 border-[#a7a29a] pt-4">
            <h3 className="text-center text-2xl font-normal text-stone-800">
              {day}
            </h3>
            <p className="mx-auto mt-2 max-w-sm text-center text-base text-stone-600">
              {description}
            </p>
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