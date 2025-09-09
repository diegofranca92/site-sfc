"use client";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Tab, Tabs } from "@heroui/tabs";

const posts = [
  {
    titulo: "Projeto de revitalização da orla",
    cat: "Projetos",
    capa: "https://placehold.co/800x450/png?text=Orla",
    resumo:
      "Iniciativa para valorizar o turismo sustentável e o espaço público.",
  },
  {
    titulo: "Samba de roda: patrimônio vivo",
    cat: "História & Raízes",
    capa: "https://placehold.co/800x450/png?text=Samba+de+Roda",
    resumo: "As rodas que preservam a memória afro-brasileira no Recôncavo.",
  },
  {
    titulo: "Roteiro colonial em um dia",
    cat: "História & Raízes",
    capa: "https://placehold.co/800x450/png?text=Arquitetura+Colonial",
    resumo:
      "Igrejas e construções históricas que contam a trajetória da cidade.",
  },
];

export default function BlogPage() {
  const categorias = ["Todos", "Projetos", "História & Raízes"] as const;

  const filtered = (cat: (typeof categorias)[number]) =>
    cat === "Todos" ? posts : posts.filter((p) => p.cat === cat);

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Blog</h1>
        <p className="text-foreground-600">
          Conteúdos criados por autores locais e colaborativos. Use as abas para
          filtrar por tema.
        </p>
      </header>

      <Tabs aria-label="Categorias do blog" color="primary" variant="bordered">
        {categorias.map((c) => (
          <Tab key={c} title={c}>
            <div className="grid gap-6 md:grid-cols-3">
              {filtered(c).map((p, i) => (
                <Card key={i} className="h-full">
                  <Image
                    alt={p.titulo}
                    src={p.capa}
                    className="h-40 w-full object-cover"
                  />
                  <CardBody>
                    <div className="mb-2 flex items-center gap-2">
                      <Chip size="sm" color="secondary" variant="flat">
                        {p.cat}
                      </Chip>
                    </div>
                    <h3 className="text-base font-semibold">{p.titulo}</h3>
                    <p className="text-sm text-foreground-600">{p.resumo}</p>
                  </CardBody>
                  <CardFooter>
                    <Button color="primary" variant="flat">
                      Ler artigo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </section>
  );
}
