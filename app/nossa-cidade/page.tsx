"use client";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

export default function NossaCidadePage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Nossa Cidade</h1>
        <p className="text-foreground-600">
          São Francisco do Conde fica no Recôncavo Baiano, cercada por
          manguezais, tradição afro-brasileira e arquitetura colonial. Esta
          página reúne história viva, cultura e lugares para visitar.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <Image
            alt="Arquitetura colonial"
            src="https://placehold.co/1200x800/png?text=Arquitetura+Colonial"
          />
          <CardHeader className="flex-col items-start gap-1">
            <Chip color="warning" variant="flat">
              História Viva
            </Chip>
            <h3 className="text-lg font-semibold">Patrimônio e memórias</h3>
          </CardHeader>
          <CardBody>
            <p>
              Igrejas, conventos e engenhos revelam a herança do século XVII. O
              sincretismo religioso e o samba de roda mantêm viva a identidade
              local.
            </p>
          </CardBody>
        </Card>

        <Card>
          <Image
            alt="Manguezais e orla"
            src="https://placehold.co/1200x800/png?text=Orla+e+Manguezal"
          />
          <CardHeader className="flex-col items-start gap-1">
            <Chip color="primary" variant="flat">
              Natureza
            </Chip>
            <h3 className="text-lg font-semibold">Baía e manguezais</h3>
          </CardHeader>
          <CardBody>
            <p>
              Áreas de mangue, passeios de barco e vistas da Baía de
              Todos-os-Santos fazem parte do cotidiano e do turismo sustentável.
            </p>
          </CardBody>
        </Card>
      </div>

      <Accordion selectionMode="multiple" variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Cultura & Raízes"
          title="Cultura & Raízes"
        >
          <p>
            As religiões de matriz africana, o candomblé e o samba de roda
            marcam o calendário de festas e rituais. Gastronomia com dendê,
            mariscos e sabores do Recôncavo.
          </p>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Que fazer" title="O que fazer">
          <ul className="list-disc space-y-1 pl-6">
            <li>Visitar igrejas históricas e mirantes</li>
            <li>Passeios de barco pela baía</li>
            <li>Trilhas leves próximas aos manguezais</li>
          </ul>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
