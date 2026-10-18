import Image from "next/image";
import dividerImage from "../../public/gotland-divider.svg";

export default function SectionDivider() {
  return (
    <div aria-hidden="true" className="mb-10 mt-10 flex h-10 items-center justify-center">
      <Image
        src={dividerImage}
        alt=""
        className="h-10 w-full object-contain opacity-90"
      />
    </div>
  );
}