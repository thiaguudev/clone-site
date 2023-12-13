import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  icon: StaticImport;
  title: String;
};

export function ItemService({ icon, title }: Props) {
  return (
    <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
      <div className="w-7 h-7 flex items-center justify-center">
        <Image src={icon} alt="Icon Phone" />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{title}</p>
    </li>
  );
}
