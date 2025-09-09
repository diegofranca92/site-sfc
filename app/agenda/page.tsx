"use client";
import { Chip } from "@heroui/chip";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Tab, Tabs } from "@heroui/tabs";

const eventos = [
  {
    nome: "Samba de Roda na Praça",
    data: "Sáb 20:00",
    local: "Praça Central",
    tipo: "Cultura",
  },
  {
    nome: "Feira de Empreendedores",
    data: "Dom 09:00",
    local: "Orla",
    tipo: "Feira",
  },
  {
    nome: "Procissão Tradicional",
    data: "Qui 18:00",
    local: "Igreja Matriz",
    tipo: "Religioso",
  },
  { nome: "Regata na Baía", data: "Sab 09:00", local: "Píer", tipo: "Esporte" },
];

export default function AgendaPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Agenda de Rolês</h1>
        <p className="text-foreground-600">
          Fique por dentro dos eventos fixos e novidades da cidade.
        </p>
      </header>

      <Tabs aria-label="Filtros">
        <Tab key="tudo" title="Tudo">
          <EventosTable data={eventos} />
        </Tab>
        <Tab key="cultura" title="Cultura">
          <EventosTable data={eventos.filter((e) => e.tipo === "Cultura")} />
        </Tab>
        <Tab key="religioso" title="Religioso">
          <EventosTable data={eventos.filter((e) => e.tipo === "Religioso")} />
        </Tab>
      </Tabs>
    </section>
  );
}

function EventosTable({ data }: { data: typeof eventos }) {
  return (
    <Table aria-label="Tabela de eventos">
      <TableHeader>
        <TableColumn>EVENTO</TableColumn>
        <TableColumn>DATA/HORA</TableColumn>
        <TableColumn>LOCAL</TableColumn>
        <TableColumn>TIPO</TableColumn>
      </TableHeader>
      <TableBody emptyContent={`Sem eventos neste filtro.`}>
        {data.map((e, i) => (
          <TableRow key={i}>
            <TableCell>{e.nome}</TableCell>
            <TableCell>{e.data}</TableCell>
            <TableCell>{e.local}</TableCell>
            <TableCell>
              <Chip size="sm" color="primary" variant="flat">
                {e.tipo}
              </Chip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
