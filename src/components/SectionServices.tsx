import Image from "next/image";

import { Container } from "./Container";
import { ItemService } from "./ItemService";

import ImagePhone from "@/assets/phone.png";
import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

export function SectionServices() {
  return (
    <section className="relative w-full h-[965px]">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <ItemService
              icon={PhoneIcon}
              title="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
            />
            <ItemService
              icon={SoluctionsIcon}
              title="Soluções de empréstimos e renegociação para organizar suas finanças"
            />
            <ItemService
              icon={OptionsIcon}
              title="Diversas opções de investimentos, de acordo cin i seu perfil de investidor"
            />
            <ItemService
              icon={CardIcon}
              title="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"
            />
          </ul>
        </div>
      </Container>
      <div className="absolute right-0 top-0 h-full w-[32%] bg-gray-phone flex items-center ">
        <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]" />
      </div>
    </section>
  );
}
