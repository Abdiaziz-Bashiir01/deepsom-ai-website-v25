import type {Metadata} from "next";
import {SectionHead,Outcomes,Action} from "@/components/ui";

export const metadata:Metadata={
  title:"Research & Innovation",
  description:"Applied AI research and innovation at Deepsom AI."
};

const areas=[
  {
    title:"Education",
    text:"AI-powered education, intelligent learning and digital classrooms.",
    image:"/images/research/Education.jpg"
  },
  {
    title:"Climate",
    text:"AI analysing climate, environmental and sustainability data.",
    image:"/images/research/Climate.png"
  },
  {
    title:"Healthcare",
    text:"Artificial intelligence supporting health research and data.",
    image:"/images/research/Healthcare.jpg"
  },
  {
    title:"Agriculture",
    text:"Smart agriculture and AI-enabled systems in African contexts.",
    image:"/images/research/Agriculture.png"
  },
  {
    title:"Responsible AI",
    text:"Research into governance, fairness and responsible technology.",
    image:"/images/research/Responsible-AI.png"
  },
  {
    title:"Privacy & Fairness",
    text:"Data privacy, cybersecurity and responsible data use.",
    image:"/images/research/Privacy.png"
  }
];

export default function ResearchPage(){
  return (
    <main>

      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Research & innovation</span>
          <h1>Inquiry that leads to action.</h1>
          <p>
            Applied research and innovation focused on challenges and
            opportunities that matter across the region.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">

          <SectionHead
            eyebrow="Focus areas"
            title="Research in service of society."
          >
            We create spaces where evidence, expertise and imagination
            become actionable knowledge.
          </SectionHead>

          <div className="grid3">

            {areas.map(area=>(
              <article
                className="card research-card"
                key={area.title}
              >

                <div className="research-image">
                  <img
                    src={area.image}
                    alt={area.title}
                  />
                </div>

                <h3>{area.title}</h3>

                <p>{area.text}</p>

              </article>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
