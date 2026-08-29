import type {Metadata} from "next";
import {Action,Outcomes,SectionHead} from "@/components/ui";
import {programs} from "@/content/site-content";

export const metadata:Metadata={
  title:"Programs",
  description:"Professional AI education pathways at Deepsom AI."
};

export default function ProgramsPage(){
  return (
    <main>

      <section className="page-hero">
        <div className="shell">
          <span className="eyebrow">Education</span>
          <h1>Build capability for what comes next.</h1>
          <p>
            Practical, rigorous and relevant learning for professionals,
            leaders and organisations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">

          <SectionHead
            eyebrow="Learning pathways"
            title="Designed for practical confidence and lasting impact."
          >
            Our programmes pair strong foundations with hands-on work,
            guided by responsible practice.
          </SectionHead>

          <div className="grid3">

            {programs.map((program)=>(
              <article
                className="card program-card"
                key={program.title}
              >

                <div className="program-image">
                  <img
                    src={program.image}
                    alt={program.title}
                  />
                </div>

                <span className="icon">AI For</span>

                <h3>{program.title}</h3>

                <p>{program.text}</p>

                <p>
                  <b>{program.duration}</b>
                </p>

                <Outcomes items={program.outcomes}/>

                <Action>Register interest</Action>

              </article>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
