import EmblaCarousel from "@/components/carrousel/Carousel";
import "@/components/carrousel/css/embla.css";
import GaleriaGrade from "@/components/galeria-grade";
import { subtitle, title } from "@/components/primitives";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div className="mt-8">
        <GaleriaGrade />
      </div>
    </section>
  );
}
