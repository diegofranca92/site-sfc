import ProjectCard from "@/components/card";
import { subtitle, title } from "@/components/primitives";

export default function FeitoEmSFC() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>São Francisco do Conde</span>
        <br />
        <span className={title({ color: "violet", size: "sm" })}>
          A Joia do Recôncavo
        </span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3"></div>

      <div className="mt-8">
        <ProjectCard />
      </div>
    </section>
  );
}
