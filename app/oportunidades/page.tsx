"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { Snippet } from "@heroui/snippet";

const fontes = [
  { nome: "SINE Bahia", url: "https://www.sinebahia.com.br" },
  { nome: "VAGAS.com", url: "https://www.vagas.com.br" },
  { nome: "Gupy", url: "https://www.gupy.io" },
];

export default function OportunidadesPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Oportunidades</h1>
        <p className="text-foreground-600">
          Confira vagas e fontes confiáveis para buscar trabalho na região.
        </p>
      </header>

      <Card>
        <CardHeader>Links úteis</CardHeader>
        <CardBody>
          <Listbox aria-label="Sites de vagas">
            {fontes.map((f, i) => (
              <ListboxItem key={i} href={f.url} target="_blank">
                {f.nome}
              </ListboxItem>
            ))}
          </Listbox>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Compartilhe uma vaga</CardHeader>
        <CardBody>
          <p className="mb-2 text-sm text-foreground-600">
            Quer divulgar uma vaga? Envie um e-mail com título, descrição e
            contato.
          </p>
          <Snippet symbol="" variant="flat" color="primary">
            oportunidades@minhajoiasfc.com.br
          </Snippet>
        </CardBody>
      </Card>
    </section>
  );
}
