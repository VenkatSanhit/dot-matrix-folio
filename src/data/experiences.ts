export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  status: "active" | "inactive";
  description: string;
  achievements: string[];
  tags: string[];
  index: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Senior Technical Product Manager",
    company: "BulkMagic",
    location: "New York, USA",
    period: "Feb 2024 – Present",
    status: "active",
    description:
      "Led end-to-end product lifecycle for a headless, credit-driven social commerce platform empowering group purchasing and referral-based growth.",
    achievements: [
      "Defined product vision & roadmap from <span class='metric-highlight'>0→1</span> for a cloud-based, credit-driven marketplace built on Saleor (GraphQL commerce)",
      "Designed MVPs for credit-engine, referral-system, pricing engine, and transaction workflows using Figma & Miro",
      "Collaborated with architects to design API contracts for pricing, payments, authentication & order management",
      "Conducted A/B testing on transaction flows validating credit rules, discount logic & post-order financials",
      "Tracked GMV, AOV, conversion behavior, referral activation using analytics to guide product decisions",
    ],
    tags: ["GraphQL", "AWS", "Python", "Agile", "A/B Testing", "Figma"],
    index: "01",
  },
  {
    role: "Technical Product Manager",
    company: "First Connect Worldwide",
    location: "New Jersey, USA",
    period: "Aug 2023 – Dec 2024",
    status: "inactive",
    description:
      "Founding PM for a 3PL logistics platform, transforming manual operations into scalable digital experiences for shippers and carriers.",
    achievements: [
      "Defined MVP scope and OKR-driven roadmap; drove <span class='metric-highlight'>200% traffic growth</span> & <span class='metric-highlight'>60% revenue increase</span>",
      "Launched 'Dedicated Lanes' premium service using dynamic pricing — doubled service-based sales in one year",
      "Led hypothesis-driven experiments across 4 use cases to identify highest-revenue Hero use case",
      "Partnered with design on full UX overhaul — <span class='metric-highlight'>20% booking completion</span> ↑ & <span class='metric-highlight'>30% drop-off</span> ↓",
      "Increased team velocity <span class='metric-highlight'>18%</span> and cut sprint spillovers <span class='metric-highlight'>40%</span>",
    ],
    tags: ["SAFe", "REST APIs", "Power BI", "Figma", "SQL", "Product Analytics"],
    index: "02",
  },
  {
    role: "Product Manager",
    company: "WebPipl",
    location: "India",
    period: "Jun 2020 – Dec 2022",
    status: "inactive",
    description:
      "Managed a suite of AI-enabled talent acquisition products — myATS, i-Verified (Video Interview), and AI-powered Candidate Sourcing Tool.",
    achievements: [
      "Drove <span class='metric-highlight'>4.5x sales growth</span> Q4'21 to Q4'22; increased user activation rate by <span class='metric-highlight'>66%</span>",
      "Reduced time-to-value from <span class='metric-highlight'>30 days → 12 days</span> through platform optimization",
      "Contributed <span class='metric-highlight'>47.62%</span> of total users/candidates for Q3 & Q4 FY20-21",
      "Optimized NLP-based resume parsing to <span class='metric-highlight'>98% accuracy</span> at &lt;1s latency",
      "Led competitive benchmarking of 500+ products & 1,000+ respondents for GTM; boosted adoption <span class='metric-highlight'>30%</span>",
    ],
    tags: ["AI/NLP", "Python", "A/B Testing", "Agile", "Figma", "SQL", "Kanban"],
    index: "03",
  },
  {
    role: "Product Analyst / Scrum Coordinator",
    company: "Capgemini (Client: MetLife)",
    location: "India",
    period: "Aug 2018 – Mar 2020",
    status: "inactive",
    description:
      "Managed product lifecycle and Agile coordination for mission-critical insurance and compliance systems.",
    achievements: [
      "Owned enterprise DB2 infrastructure operations — improved system reliability by <span class='metric-highlight'>30%</span>",
      "Reduced unplanned downtime by <span class='metric-highlight'>40%</span> via A/B testing on monitoring workflows",
      "Improved UX <span class='metric-highlight'>20%</span> and operational efficiency <span class='metric-highlight'>35%</span> via wireframes & process maps",
      "Validated data retention, encryption & access controls for sensitive financial data compliance",
    ],
    tags: ["IBM DB2", "Agile-Scrum", "Lucidchart", "JIRA", "Power BI", "SQL"],
    index: "04",
  },
];
