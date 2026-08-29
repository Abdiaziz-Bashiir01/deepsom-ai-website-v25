import { notFound } from "next/navigation";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import {
  Action,
  Card,
  Outcomes,
  SectionHead,
} from "@/components/ui";
import { programs, research, services } from "@/content/site-content";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ page: string }>;
};

const copy: Record<
  string,
  { title: string; intro: string; eyebrow: string }
> = {
  about: {
    eyebrow: "About Deepsom",
    title: "Intelligence, built with purpose.",
    intro:
      "We are establishing a world-class institution for artificial intelligence and technology, rooted in Somaliland and connected to Africa and the world.",
  },

  programs: {
    eyebrow: "Education",
    title: "Build capability for what comes next.",
    intro:
      "Practical, rigorous and relevant learning for professionals, leaders and organisations.",
  },

  research: {
    eyebrow: "Research & innovation",
    title: "Inquiry that leads to action.",
    intro:
      "Applied research and innovation focused on the challenges and opportunities that matter across Africa.",
  },

  consultancy: {
    eyebrow: "Consultancy",
    title: "Technology strategy with clarity.",
    intro:
      "We help institutions turn emerging technology into trusted, practical advantage.",
  },

  partnerships: {
    eyebrow: "Partnerships",
    title: "Progress is a shared endeavour.",
    intro:
      "Partner with Deepsom AI to learn, research, innovate and create lasting public value.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Start a conversation.",
    intro:
      "Whether you are ready to learn, collaborate or explore an idea, we would be pleased to hear from you.",
  },
};

export async function generateMetadata({ params }: PageProps) {
  const { page } = await params;

  return {
    title: copy[page]?.title || "Not found",
  };
}

export default async function Page({ params }: PageProps) {
  const { page } = await params;

  const data = copy[page];

  if (!data) {
    notFound();
  }

  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">{data.eyebrow}</span>
          <h1>{data.title}</h1>
          <p>{data.intro}</p>
        </div>
      </section>

      {page === "about" && <About />}
      {page === "programs" && <Programs />}
      {page === "research" && <Research />}
      {page === "consultancy" && <Consultancy />}
      {page === "partnerships" && <Partnerships />}
      {page === "contact" && <Contact />}
    </main>
  );
}

/* =========================================================
   ABOUT
   ========================================================= */

function About() {
  const values = [
    [
      "Excellence",
      "Rigour in learning, research and delivery.",
    ],
    [
      "Responsibility",
      "Technology designed with people, rights and context in mind.",
    ],
    [
      "Collaboration",
      "Partnership across disciplines and communities.",
    ],
    [
      "African leadership",
      "Local knowledge, global standards.",
    ],
    [
      "Trust",
      "Clear, accountable work that earns confidence.",
    ],
    [
      "Curiosity",
      "A commitment to asking better questions.",
    ],
  ];

  return (
    <>
      <section className="section">
        <div className="shell split">
          <div>
            <SectionHead
              eyebrow="Institute overview"
              title="An institute for the region's defining technology moment."
            >
              Deepsom AI advances academic excellence, professional
              education, research and practical innovation. We believe
              Africa should be creators, stewards and leaders in
              artificial intelligence.
            </SectionHead>
          </div>

          <div>
            <h3>Our vision</h3>
            <p>
              To enable African leadership in the thoughtful creation
              and use of artificial intelligence.
            </p>

            <h3>Our mission</h3>
            <p>
              To educate, research and convene responsible technology
              for inclusive and durable progress.
            </p>

            <h3>Why it matters</h3>
            <p>
              AI can improve essential systems, expand access to
              opportunity and accelerate locally meaningful innovation
              when it is built with context and care.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell">
          <SectionHead
            eyebrow="Our values"
            title="The standards we bring to the work."
          />

          <div className="grid3">
            {values.map(([title, text]) => (
              <Card
                key={title}
                title={title}
                text={text}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   PROGRAMS
   ========================================================= */

function Programs() {
  return (
    <section className="section">
      <div className="shell">
        <SectionHead
          eyebrow="Learning pathways"
          title="Build capability for what comes next."
        >
          Our programmes pair strong foundations with hands-on work,
          guided by responsible practice.
        </SectionHead>

        <div className="grid3">
          {programs.map((p) => (
            <article key={p.title} className="card">
              {p.image && (
                <div
                  style={{
                    width: "calc(100% + 50px)",
                    height: "220px",
                    margin: "-25px -25px 25px",
                    overflow: "hidden",
                    borderRadius: "18px 18px 0 0",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              )}

              <span className="icon">
                <BookOpen size={22} />
              </span>

              <h3>{p.title}</h3>

              <p>{p.text}</p>

              <p
                style={{
                  marginTop: 18,
                  fontWeight: 700,
                  color: "var(--blue)",
                }}
              >
                {p.duration}
              </p>

              <Outcomes items={p.outcomes} />

              <p>
                <Action>Register interest</Action>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RESEARCH
   ========================================================= */

function Research() {
  const focusAreas = [
    {
      title: "Education",
      image: "/images/research/Education.jpg",
      text:
        "AI-powered education, intelligent learning and digital classrooms.",
    },
    {
      title: "Climate",
      image: "/images/research/Climate.png",
      text:
        "AI analysing climate, environmental and sustainability data.",
    },
    {
      title: "Healthcare",
      image: "/images/research/Healthcare.jpg",
      text:
        "Artificial intelligence supporting health research and data.",
    },
    {
      title: "Agriculture",
      image: "/images/research/Agriculture.png",
      text:
        "Smart agriculture and AI-enabled systems in African contexts.",
    },
    {
      title: "Responsible AI",
      image: "/images/research/Responsible-AI.png",
      text:
        "Research into governance, fairness and responsible technology.",
    },
    {
      title: "Privacy & Fairness",
      image: "/images/research/Privacy.png",
      text:
        "Data privacy, cybersecurity and responsible data use.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Our labs"
            title="Research in service of society."
          >
            We create spaces where evidence, expertise and imagination
            become actionable knowledge.
          </SectionHead>

          <div className="grid3">
            {research.map((r) => (
              <Card
                key={r.title}
                title={r.title}
                text={r.text}
                icon={r.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell">
          <SectionHead
            eyebrow="Focus areas"
            title="Themes for a changing world."
          />

          <div className="grid3">
            {focusAreas.map((item) => (
              <article
                className="card research-card"
                key={item.title}
              >
                <div className="research-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   CONSULTANCY
   ========================================================= */

function Consultancy() {
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
      image:
        "/images/consultancy/digital-transformation.png",
      icon: "cloud" as const,
    },
    {
      title: "Data Analytics",
      description:
        "Make data useful, reliable and decision-ready.",
      image:
        "/images/consultancy/data-analytics.png",
      icon: "sparkles" as const,
    },
    {
      title: "AI Development",
      description:
        "Prototype and deploy with security and purpose.",
      image:
        "/images/consultancy/ai-development.png",
      icon: "network" as const,
    },
    {
      title: "Capacity Building",
      description:
        "Build durable skills across your organisation.",
      image:
        "/images/consultancy/capacity-building.png",
      icon: "book" as const,
    },
    {
      title: "Technology Advisory",
      description:
        "Navigate complex technology decisions with confidence.",
      image:
        "/images/consultancy/technology-advisory.png",
      icon: "handshake" as const,
    },
  ];

  return (
    <main>
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Advisory & delivery"
            title="From strategy to meaningful implementation."
          >
            Our consulting approach brings together technical insight,
            governance awareness and organisational change.
          </SectionHead>

          <div className="grid3 consultancy-grid">
            {consultancyServices.map((service) => (
              <article
                className="consultancy-card"
                key={service.title}
              >
                <div className="consultancy-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} consultancy`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

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

          <p style={{ marginTop: 30 }}>
            <Action>Discuss your needs</Action>
          </p>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PARTNERSHIPS
   ========================================================= */

function Partnerships() {
  const groups: [
    string,
    string,
    string
  ][] = [
    [
      "university",
      "Universities",
      "Joint research, exchange and talent pathways.",
    ],
    [
      "landmark",
      "Government",
      "Public-interest innovation and capacity building.",
    ],
    [
      "building",
      "Industry & NGOs",
      "Applied programmes, projects and innovation challenges.",
    ],
    [
      "handshake",
      "International organisations",
      "Regional initiatives with global reach.",
    ],
  ];

  return (
    <>
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Collaborate"
            title="Open to institutions ready to make a difference."
          >
            We welcome partnerships that strengthen education,
            research, innovation and technology stewardship.
          </SectionHead>

          <div className="grid3">
            {groups.map(([icon, title, text]) => (
              <Card
                key={title}
                title={title}
                text={text}
                icon={
                  icon as
                    | "university"
                    | "landmark"
                    | "building"
                    | "handshake"
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell split">
          <div>
            <SectionHead
              eyebrow="Partnership inquiry"
              title="Tell us what you want to achieve."
            />
          </div>

          <Inquiry />
        </div>
      </section>
    </>
  );
}

/* =========================================================
   CONTACT
   ========================================================= */

function Contact() {
  return (
    <section className="section">
      <div className="shell split">
        <div>
          <SectionHead
            eyebrow="Get in touch"
            title="We would love to hear from you."
          />

          <p>
            Email:{" "}
            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>

          <p>
            Location: Jigjiga Yar, Hargeisa, Somaliland
          </p>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Jigjiga+Yar,+Hargeisa,+Somaliland&output=embed"
              width="100%"
              height="400"
              style={{
                border: 0,
                borderRadius: "18px",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deepsom AI location - Jigjiga Yar, Hargeisa, Somaliland"
            />
          </div>
        </div>

        <Inquiry />
      </div>
    </section>
  );
}

/* =========================================================
   INQUIRY FORM
   ========================================================= */

function Inquiry() {
  return (
    <form
      className="form card"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
        />
      </div>

      <div>
        <label htmlFor="organisation">
          Organisation
        </label>

        <input
          id="organisation"
          name="organisation"
        />
      </div>

      <div>
        <label htmlFor="message">
          How can we help?
        </label>

        <textarea
          id="message"
          name="message"
          required
        />
      </div>

      <button
        className="btn btn-primary"
        type="submit"
      >
        Send inquiry
      </button>
    </form>
  );
}