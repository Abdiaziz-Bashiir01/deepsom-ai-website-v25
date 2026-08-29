import type { Metadata } from "next";
import Image from "next/image";
import { Card, SectionHead } from "@/components/ui";

export const metadata: Metadata = {
  title: "Consultancy",
  description:
    "AI strategy, digital transformation and technology advisory from Deepsom AI.",
};

const consultancyServices = [
  {
    title: "AI Strategy",
    description:
      "Set a clear, responsible direction for AI investment.",
    image: "/images/consultancy/ai-strategy.png",
    icon: "brain" as const,
  },
  {
    title: "Digital Transformation",
    description:
      "Design human-centred systems and operating models.",
    image: "/images/consultancy/digital-transformation.png",
    icon: "cloud" as const,
  },
  {
    title: "Data Analytics",
    description:
      "Make data useful, reliable and decision-ready.",
    image: "/images/consultancy/data-analytics.png",
    icon: "sparkles" as const,
  },
  {
    title: "AI Development",
    description:
      "Prototype and deploy with security and purpose.",
    image: "/images/consultancy/ai-development.png",
    icon: "network" as const,
  },
  {
    title: "Capacity Building",
    description:
      "Build durable skills across your organisation.",
    image: "/images/consultancy/capacity-building.png",
    icon: "book" as const,
  },
  {
    title: "Technology Advisory",
    description:
      "Navigate complex technology decisions with confidence.",
    image: "/images/consultancy/technology-advisory.png",
    icon: "handshake" as const,
  },
];

export default function ConsultancyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Consultancy</span>

          <h1>Technology strategy with clarity.</h1>

          <p>
            We help institutions turn emerging technology into trusted,
            practical advantage.
          </p>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Advisory & delivery"
            title="From strategy to meaningful implementation."
          >
            Our consultancy brings together technical expertise,
            responsible AI principles, data-driven decision making and
            organisational transformation.
          </SectionHead>

          <div className="grid3 consultancy-grid">
            {consultancyServices.map((service) => (
              <article className="consultancy-card" key={service.title}>
                {/* Service Image */}
                <div className="consultancy-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} consultancy`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Service Information */}
                <div className="consultancy-content">
                  <Card
                    title={service.title}
                    text={service.description}
                    icon={service.icon}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section dark">
        <div className="shell">
          <SectionHead
            eyebrow="Work with Deepsom AI"
            title="Turn technology into meaningful impact."
          >
            Whether you need an AI strategy, workforce transformation,
            data analytics, AI development or technology advisory, we can
            help you move from ideas to practical implementation.
          </SectionHead>
        </div>
      </section>
    </main>
  );
}