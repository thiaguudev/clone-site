import Image from "next/image";

import ArrowDown from "@/assets/arrow-down.svg";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={ArrowDown} alt="Arrow dropdown" />
    </button>
  );
}
