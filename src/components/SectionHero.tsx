import Image from "next/image";

import { Container } from "@/components/Container";
import ImgAppleStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import ArrowExplorer from "@/assets/arrow-explorer.svg";
import Woman from "@/assets/woman.png";

export function SectionHero() {
  return (
    <section className="w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h2 className="text-white text-7xl font-bold mb-4">
            Tenha seu banco na palma da mão
          </h2>
          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppleStore} alt="Apple Story" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Google Play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={ArrowExplorer} alt="Arrow explorer" />
            <span className="text-white text-sm font-bold">
              Continue explorando
            </span>
          </button>
        </div>

        <Image src={Woman} alt="Woman" className="mr-[-41px]" />
      </Container>
    </section>
  );
}
