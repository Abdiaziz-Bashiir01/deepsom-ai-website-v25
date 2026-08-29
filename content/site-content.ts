export type IconName="brain"|"cpu"|"network"|"sparkles"|"cloud"|"lock"|"leaf"|"shield"|"book"|"globe"|"microscope"|"users"|"quote"|"university"|"landmark"|"building"|"handshake";

export const expertise=[
  ["brain","Artificial Intelligence","Building intelligent systems for measurable impact."],
  ["cpu","Machine & Deep Learning","Applied learning systems from insight to responsible deployment."],
  ["network","Data & Big Data Analytics","Turning complex data into trusted decisions."],
  ["sparkles","Robotics & Autonomous Systems","Exploring adaptive technology."],
  ["cloud","Cloud & Internet of Things","Connected, scalable infrastructure."],
  ["lock","Cybersecurity & AI Security","Secure-by-design systems for a connected future."]
] as const;

export const programs = [
  {
    title: "Professional Training",
    duration: "8-16 weeks",
    image: "/images/programs/professional-training.png",
    text: "Hands-on, career-focused learning in AI, data, cloud and security.",
    outcomes: [
      "Applied technical foundations",
      "Portfolio-ready projects",
      "Responsible AI practice"
    ]
  },
  {
    title: "Executive Education",
    duration: "2-5 days",
    image: "/images/programs/executive-education.png",
    text: "Strategic AI literacy for leaders shaping resilient organisations.",
    outcomes: [
      "AI opportunity mapping",
      "Governance foundations",
      "Confident decision-making"
    ]
  },
  {
    title: "Corporate Training",
    duration: "Tailored",
    image: "/images/programs/corporate-training.png",
    text: "Capability-building programmes designed around your team's challenges.",
    outcomes: [
      "Role-based learning",
      "Live business use cases",
      "Measurable adoption"
    ]
  },
  {
    title: "Future Certifications",
    duration: "Coming soon",
    image: "/images/programs/future-certifications.png",
    text: "Globally relevant credentials for Africa's emerging technology workforce.",
    outcomes: [
      "Recognised pathways",
      "Expert-led assessment",
      "Lifelong learning"
    ]
  }
];


export const research=[
  {
    title:"AI for Sustainable Development Lab",
    icon:"leaf",
    text:"Applied research for agriculture, climate, healthcare and smart cities."
  },
  {
    title:"Ethical AI & Governance",
    icon:"shield",
    text:"Responsible AI, privacy, fairness and policy for the public good."
  },
  {
    title:"Innovation Hub",
    icon:"sparkles",
    text:"Startup incubation, hackathons and challenges connecting ideas to action."
  }
] as const;

export const services=[
  "AI Strategy",
  "Digital Transformation",
  "Data Analytics",
  "AI Development",
  "Capacity Building",
  "Technology Advisory"
];