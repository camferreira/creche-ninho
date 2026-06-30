import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-[var(--primary)]">
            Associação de Solidariedade Social O Ninho
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            Um espaço seguro para aprender, brincar e crescer.
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Acreditamos que cada criança merece crescer num ambiente seguro,
            acolhedor e familiar, onde possa desenvolver-se ao seu ritmo.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Marcar Visita</Button>

            <Button className="bg-white text-black border">
              Contactos
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex h-[500px] w-full items-center justify-center rounded-3xl bg-gray-200">
            Fotografia da creche
          </div>
        </div>
      </div>
    </Section>
  );
}