export interface ProjectCaseStudy {
  id: string;
  name: string;
  tagline: string;
  problem: {
    statement: string;
    businessContext: string;
    userPainPoints: string[];
  };
  solution: {
    strategy: string;
    execution: string;
    approach: string[];
  };
  outcomes: {
    metrics: { value: string; label: string }[];
    highlights: string[];
  };
  features: string[];
  tags: string[];
  status: "LIVE" | "IN DEV";
  accentColor: string;
  archType: string;
  isFeatured?: boolean;
}

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "01",
    name: "The Emotiles Revolution",
    tagline: "Advanced AI subtitle enhancement for global cinema accessibility",
    isFeatured: true,
    problem: {
      statement: "Subtitles lack emotional nuance — global audiences miss tone, sarcasm, and cultural context in dialogue.",
      businessContext: "Streaming platforms and cinema distributors needed a differentiator for international content while improving accessibility compliance.",
      userPainPoints: [
        "Flat text subtitles fail to convey emotion and tone",
        "Deaf/HoH viewers miss critical narrative cues",
        "Cultural nuance lost in translation",
      ],
    },
    solution: {
      strategy: "Build an AI-powered emotion detection layer that enriches subtitles with real-time tone and visual cues.",
      execution: "0→1 product from NLP research to production pipeline.",
      approach: [
        "NLP pipeline for dialogue emotion classification",
        "Tone-aware subtitle rendering with visual cues",
        "Multi-language nuance preservation",
        "Accessibility-first design for global cinema",
      ],
    },
    outcomes: {
      metrics: [
        { value: "0→1", label: "Product Launch" },
        { value: "Real-time", label: "Emotion Detection" },
        { value: "Multi-lang", label: "Support" },
      ],
      highlights: [
        "Bridged NLP research with seamless UX",
        "Made international content emotionally resonant",
      ],
    },
    features: [
      "Real-time emotion detection from dialogue audio/text",
      "Tone-aware subtitle rendering with visual cues",
      "Multi-language dialogue nuance preservation",
      "Accessibility-first design for global cinema",
    ],
    tags: ["AI", "NLP", "Product Strategy", "UX Innovation", "0→1"],
    status: "LIVE",
    accentColor: "hsl(4 100% 59%)",
    archType: "NLP PIPELINE → EMOTION CLASSIFIER → SUBTITLE RENDERER",
  },
  {
    id: "02",
    name: "FAANG Jobs Portal",
    tagline: "Real-time job aggregation platform for top-tier tech companies",
    isFeatured: false,
    problem: {
      statement: "Job seekers waste hours hunting across 20+ portals for FAANG and top-tech roles.",
      businessContext: "Senior IC and PM candidates need a single source of truth with real-time updates.",
      userPainPoints: [
        "Fragmented listings across multiple job boards",
        "Stale data and duplicate postings",
        "No unified filtering by role, level, or stack",
      ],
    },
    solution: {
      strategy: "Aggregate live job listings from FAANG + 50+ top tech companies with sub-second updates.",
      execution: "Event-driven architecture for real-time aggregation.",
      approach: [
        "Real-time scraping from multiple sources",
        "Event bus for sub-second listing updates",
        "Smart filtering by role, level, location & stack",
        "Roadmap: AI-powered match scoring & alerts",
      ],
    },
    outcomes: {
      metrics: [
        { value: "50+", label: "Companies" },
        { value: "Sub-sec", label: "Updates" },
        { value: "Zero", label: "Noise" },
      ],
      highlights: [
        "Born from personal frustration — built the product I needed",
        "Clean signal over noise for senior roles",
      ],
    },
    features: [
      "Real-time job scraping from FAANG + 50+ top tech companies",
      "Sub-second listing updates via event-driven architecture",
      "Smart filtering by role, level, location & stack",
      "Roadmap: AI-powered match scoring & alert system",
    ],
    tags: ["Real-time", "API Integration", "Product Engineering", "Pet Project"],
    status: "IN DEV",
    accentColor: "hsl(0 0% 70%)",
    archType: "SCRAPERS → EVENT BUS → AGGREGATOR → SEARCH API → UI",
  },
];
