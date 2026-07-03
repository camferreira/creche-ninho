import Button from "../ui/Button";
import Section from "../ui/Section";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Section className="overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-[42%_58%]">
        
        {/* Texto */}
        <div className="flex flex-col justify-between lg:h-[460px]">
          <div>
            <p className="font-semibold text-[var(--primary)]">
              Associação de Solidariedade Social O Ninho
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl xl:text-6xl">
              Um espaço seguro para aprender, brincar e crescer.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Acreditamos que cada criança merece crescer num ambiente seguro,
              acolhedor e familiar, onde possa desenvolver-se ao seu ritmo.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Link href="/contactos">
              <Button>Marcar Visita</Button>
            </Link>

          </div>
        </div>

        {/* Imagem */}
        <div className="hero-image relative h-[260px] sm:h-[320px] lg:h-[460px] lg:-ml-16">
  <Image
    src="/images/hero.png"
    alt="Exterior da Associação de Solidariedade Social O Ninho"
    fill
    className="object-cover"
    priority
  />
</div>
      </div>
    </Section>
  );
}