import type {Metadata} from "next";import Image from "next/image";import {Action,SectionHead} from "@/components/ui";
export const metadata:Metadata={title:"Partnerships",description:"Partner with Deepsom Institute of Artificial Intelligence and Emerging Technology."};
const global=[['google.png','Google'],['microsoft.png','Microsoft'],['indaba-deeplearning.png','Indaba DeepLearning'],['github-campus-experts.png','GitHub Campus Experts']];const local=[['gollis-university.png','Gollis University'],['frantz-fanon-university.png','Frantz Fanon University'],['soltelco.png','Soltelco Telecommunication Company'],['ministry-telecommunication-somaliland.png','Ministry of Telecommunication in Somaliland']];
function Logos({items}:{items:string[][]}){return <div className="logo-grid">{items.map(([file,name])=><div className="partner-logo" key={file}><Image src={`/images/partners/${file}`} alt={`${name} logo`} fill sizes="180px"/></div>)}</div>}
export default function PartnershipsPage(){return <main><section className="page-hero"><div className="shell"><span className="eyebrow">Partnerships</span><h1>Progress is a shared endeavour.</h1><p>We welcome collaboration that strengthens education, research, innovation and technology stewardship.</p></div></section><section className="section"><div className="shell"><SectionHead eyebrow="Global technology & knowledge partners" title="Connected to an international learning ecosystem."/><Logos items={global}/><div className="partner-logo deeplearning-logo">
  <Image
    src="/images/partners/Deeplearning.png"
    alt="DeepLearning.AI logo"
    fill
    sizes="150px"
  />
</div>
</div></section><section className="section research-band"><div className="shell"><SectionHead eyebrow="Local & regional partners" title="Grounded in regional collaboration."/><Logos items={local}/></div></section><section className="section dark"><div className="shell"><SectionHead eyebrow="Collaborate with Deepsom AI" title="Build meaningful work with us."/><div className="grid3">{['Joint Research','Training Partnerships','Internships','Industry Projects','Government Projects','International Collaboration'].map(item=><article className="card" key={item}><h3>{item}</h3></article>)}</div><p style={{marginTop:32}}><Action href="/contact">Partner With Us</Action></p></div></section></main>}
