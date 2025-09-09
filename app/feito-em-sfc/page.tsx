"use client";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const lojas = [
  {
    nome: "Joias da Maré",
    cat: "Joias",
    img: "https://placehold.co/800x600/png?text=Joias+Locais",
    url: "#",
  },
  {
    nome: "Sabor do Recôncavo",
    cat: "Salgados",
    img: "https://placehold.co/800x600/png?text=Salgados+Artesanais",
    url: "#",
  },
  {
    nome: "Arte da Baía",
    cat: "Artesanato",
    img: "https://placehold.co/800x600/png?text=Artesanato",
    url: "#",
  },
  {
    nome: "Barcos & Passeios",
    cat: "Turismo",
    img: "https://placehold.co/800x600/png?text=Passeios+de+Barco",
    url: "#",
  },
];

export default function FeitoEmSFCPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Feito em SFC</h1>
        <p className="text-foreground-600">
          Um vitrô virtual de quem faz a cidade acontecer: joias, salgados,
          artesanato, turismo e serviços locais.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lojas.map((l, i) => (
          <Card key={i} className="h-full">
            <Image
              alt={l.nome}
              src={l.img}
              className="h-48 w-full object-cover"
            />
            <CardHeader className="flex-col items-start gap-1">
              <Chip size="sm" variant="flat" color="secondary">
                {l.cat}
              </Chip>
              <h3 className="text-lg font-semibold">{l.nome}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-foreground-600">
                Destaque da semana: atendimento nota 10, produtos locais e
                preços justos.
              </p>
            </CardBody>
            <CardFooter>
              <Button as={Link} href={l.url} color="primary" variant="flat">
                Contato
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
