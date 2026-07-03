import Section from "@/components/ui/Section";

export default function QuemSomosPage() {
  return (
    <>
      <Section>
        <h1 className="text-4xl font-bold">Quem Somos</h1>

        <p className="mt-6 text-lg text-gray-600">
          Pequena apresentação da instituição.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">Missão</h2>

        <p className="mt-4 text-gray-600">
          A nossa missão será apresentada aqui.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">A Nossa Equipa</h2>

        <p className="mt-4 text-gray-600">
          Informação sobre a equipa.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold">Contas</h2>

        <p className="mt-4 text-gray-600">
          Relatórios e documentos financeiros.
        </p>
      </Section>
    </>
  );
}