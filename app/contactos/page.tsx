import Section from "@/components/ui/Section";
import { Caveat } from "next/font/google";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactItem from "@/components/cards/ContactItem";
import Image from "next/image";

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function ContactosPage() {
  return (
    <>
    <div className="relative overflow-hidden">
      {/* Hero */}
      <Section>
        <div className="max-w-2xl">
          <p
            className={`${caveat.className} text-xl lg:text-2xl text-[var(--primary)]`}
          >
            Fale connosco
          </p>

          <h1 className="mt-3 font-bold leading-[1.1] text-3xl sm:text-4xl lg:text-5xl">
            <span className="block">Estamos aqui</span>

            <span className="block text-[var(--primary)]">para ajudar.</span>
          </h1>

          <p className="mt-5 max-w-xl text-gray-600 text-sm leading-7 lg:text-base">
            Tem dúvidas, sugestões ou deseja agendar uma visita? Entre em
            contacto connosco. Será um prazer recebê-lo!
          </p>
        </div>
      </Section>

      {/* Contactos + Formulário */}
      <Section className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
          {/* Contactos */}
          <div className="divide-y divide-gray-100">
            <ContactItem icon={Phone} title="Telefone" variant="green">
              +351 266 XXX XXX
            </ContactItem>

            <ContactItem icon={Mail} title="Email" variant="orange">
              geral@oninho.pt
            </ContactItem>

            <ContactItem icon={MapPin} title="Morada" variant="green">
              <>
                Rua ...
                <br />
                Évora
              </>
            </ContactItem>

            <ContactItem icon={Clock} title="Horário" variant="orange">
              <>
                Segunda a Sexta
                <br />
                7h30 – 19h00
              </>
            </ContactItem>
          </div>

          {/* Formulário */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold">Envie-nos uma mensagem</h2>

            <form className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nome"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
                />
              </div>

              <input
                type="text"
                placeholder="Assunto"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
              />

              <textarea
                rows={6}
                placeholder="Mensagem"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[var(--primary)]"
              />

              <button className="rounded-xl bg-[var(--primary)] px-8 py-3 font-medium text-white transition hover:opacity-90">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </Section>
      <Image
  src="/images/leaf-decoration.svg"
  alt=""
  width={240}
  height={140}
  className="pointer-events-none absolute bottom-0 left-0 opacity-70 select-none"
/>
      </div>
    </>
  );
}
