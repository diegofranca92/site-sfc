"use client";
import EmblaCarousel from "@/components/carrousel/Carousel";
import "@/components/carrousel/css/embla.css";
import GaleriaGrade from "@/components/galeria-grade";
import { subtitle, title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tab, Tabs } from "@heroui/tabs";
import { EmblaOptionsType } from "embla-carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  const fotos = [
    {
      src: "https://placehold.co/1200x600/png?text=Orla+e+Manguezais+de+SFC",
      legend: "Orla e manguezais do Recôncavo",
    },
    {
      src: "https://placehold.co/1200x600/png?text=Arquitetura+Colonial",
      legend: "Arquitetura colonial e igrejas históricas",
    },
    {
      src: "https://placehold.co/1200x600/png?text=Samba+de+Roda",
      legend: "Samba de roda e tradições culturais",
    },
  ];

  const destaques = [
    {
      title: "Empreendedores em foco",
      desc: "Joias artesanais, salgados, serviços locais e mais.",
      href: "/feito-em-sfc",
    },
    {
      title: "Agenda de Rolês",
      desc: "Eventos fixos, festas populares e programação cultural.",
      href: "/agenda",
    },
    {
      title: "Oportunidades",
      desc: "Vagas de trabalho e links confiáveis na região.",
      href: "/oportunidades",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <section className="space-y-10">
        {/* Abas rápidas de navegação de conteúdos */}
        <Tabs aria-label="Destaques" color="primary" variant="solid">
          <Tab key="destaques" title="Destaques">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destaques.map((d, i) => (
                <Card key={i} className="h-full">
                  <CardBody className="space-y-2">
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="text-sm text-foreground-600">{d.desc}</p>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as={Link}
                      href={d.href}
                      color="primary"
                      variant="flat"
                    >
                      Acessar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab key="blog" title="Blog – últimos posts">
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <Image
                    alt="Capa do post"
                    src={`https://placehold.co/800x450/png?text=Post+${i}`}
                    className="h-44 w-full object-cover"
                  />
                  <CardBody>
                    <h3 className="text-base font-semibold">
                      Título do post {i}
                    </h3>
                    <p className="text-sm text-foreground-600">
                      Resumo curto do artigo com foco em projetos legais e
                      História & Raízes.
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Button
                      as={Link}
                      href="/blog"
                      size="sm"
                      variant="flat"
                      color="primary"
                    >
                      Ler no blog
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
        </Tabs>
      </section>

      <div className="flex gap-3">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div className="mt-8">
        <GaleriaGrade />
      </div>
    </section>
  );
}
