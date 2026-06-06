// Portfolio content
window.PORTFOLIO = {
  name: "Boris Mitioglov",
  role: "Lead / Staff Software Engineer",
  focus: "Platform · AI Systems · Distributed Infrastructure",
  location: "San Diego, CA",
  email: "boris.mitioglov@gmail.com",
  phone: "+1 (858) 951-5942",
  github: "github.com/bmitioglov",
  linkedin: "linkedin.com/in/bmitioglov",
  yearsExp: 12,

  bio: [
    "I design and scale platform and distributed systems in production — the kind that move tens of thousands of events per second and can't afford to lose a single one.",
    "Most of the last seven years I've led modernization work at Verizon: re-architecting a legacy C#/Tibco pipeline into an event-driven Java + Kafka system, pushing throughput from ~7k to ~20k msg/sec with zero message loss, and migrating everything to Kubernetes.",
    "On the side, I founded PumpX — a consumer fitness SaaS with an AI coach — and shipped it end-to-end: backend, mobile, cloud, product. Currently most excited about building AI systems that make engineering teams faster, and consumer products that use LLMs where they actually earn their keep."
  ],

  now: [
    "Shipping AI observability agents at Verizon",
    "Growing PumpX past 220 MAU",
    "Writing more LangGraph than Java, lately"
  ],

  experience: [
    {
      company: "Verizon",
      via: "via EPAM",
      role: "Lead Software Engineer",
      period: "Apr 2019 — Present",
      location: "San Diego, CA",
      current: true,
      bullets: [
        "Designed and built an internal AI-powered observability assistant using LangGraph, integrating Splunk, Kubernetes, and Confluence to accelerate debugging and root-cause analysis; adopted by multiple engineering teams.",
        "Tech lead and primary architect for the modernization team scaling Verizon's IoT ingestion platform.",
        "Re-architected legacy C# + Tibco into a Java + Kafka event-driven system — throughput ~7k → ~20k msg/sec.",
        "Reliability guarantees: retries with exponential backoff, DLQs, idempotent consumers, commit-after-success — zero message loss.",
        "Led containerization and migration to OpenShift Kubernetes."
      ],
      stack: ["LangGraph", "Python", "Java", "Spring Boot", "Kafka", "Spark", "Airflow", "Couchbase", "OpenShift", "AWS", "Splunk"]
    },
    {
      company: "PumpX Fitness",
      via: "Founder",
      role: "Founder & Engineer",
      period: "Mar 2022 — Present",
      location: "pumpx.app",
      highlight: true,
      bullets: [
        "Founded and architected a consumer SaaS fitness platform — full ownership across backend, mobile, cloud, and product.",
        "Designed and shipped an AI-powered fitness coach: personalized workouts, adaptive recommendations, performance insights.",
        "Led and mentored a team of 4+ engineers; set technical direction and reviewed designs.",
        "~220 MAU, 17 paying subscribers — validated product-market fit and monetization."
      ],
      stack: ["Java", "Spring Boot", "MySQL", "AWS", "React Native", "TypeScript", "Redux"]
    },
    {
      company: "Brightcove",
      via: "via EPAM",
      role: "Senior Software Engineer",
      period: "Nov 2017 — Apr 2019",
      location: "Saint Petersburg",
      bullets: [
        "Built distributed data pipelines for a video analytics platform — ~1.7–2B events/day across ~200M users/month.",
        "Spark batch + streaming; orchestration with Airflow.",
        "Led TB-scale data migration from on-prem to cloud object storage.",
        "Contributed to OLAP analytics on Apache Druid."
      ],
      stack: ["Spark", "Airflow", "Druid", "Scala"]
    },
    {
      company: "EPAM Systems",
      via: "",
      role: "Senior Software Engineer",
      period: "Jul 2017 — Nov 2017",
      location: "Saint Petersburg",
      bullets: [
        "IoT demo applications for automotive + insurance use cases.",
        "Kafka integration for real-time data processing."
      ],
      stack: ["Kafka", "Java", "JavaScript"]
    },
    {
      company: "Deutsche Bank",
      via: "via Luxoft",
      role: "Senior Java Developer",
      period: "Sep 2016 — Jul 2017",
      location: "Saint Petersburg",
      bullets: [
        "Real-time event processing with Spark and Apache Storm — ~5k events/sec, ~300ms latency.",
        "Compliance-grade persistence on MarkLogic NoSQL."
      ],
      stack: ["Spark", "Storm", "MarkLogic", "Java"]
    },
    {
      company: "Netcracker",
      via: "",
      role: "Java Developer",
      period: "Aug 2013 — Aug 2016",
      location: "Saint Petersburg",
      bullets: [
        "Services and data pipelines for telecom clients (Cox, Telefónica Uruguay).",
        "Focus on reliability, scalability, performance in distributed systems."
      ],
      stack: ["Java", "SQL"]
    },
    {
      company: "Rosneft",
      via: "",
      role: "Junior Java Developer",
      period: "Feb 2013 — Aug 2013",
      location: "Saint Petersburg",
      bullets: [
        "Reporting and real-time pipeline monitoring using ActiveMQ.",
        "Internal tools for data visualization and system monitoring."
      ],
      stack: ["Java", "ActiveMQ"]
    }
  ],

  projects: [
    {
      id: "pumpx",
      name: "PumpX",
      tagline: "AI-powered fitness coach",
      year: "2022 —",
      role: "Founder, engineer, product",
      status: "Live · 220 MAU",
      featured: true,
      description: "A consumer SaaS fitness app with an LLM-driven coach that designs adaptive workouts and reads user performance signals. I built everything — backend (Spring Boot + MySQL on AWS), mobile (React Native), cloud, the AI layer, and the product direction.",
      link: "pumpx.app"
    },
    {
      id: "seoauto",
      name: "SEOAuto",
      tagline: "AI agent that researches trends and writes traffic-driving articles",
      year: "2024 —",
      role: "Founder, engineer",
      status: "Live · 11k+ monthly organic",
      featured: true,
      description: "An autonomous AI content pipeline I built to solve PumpX's growth problem. Mines trend signals, generates three article archetypes (product comparisons, trending-athlete profiles, educational), and publishes to the PumpX blog. Deployed on AWS EC2; runs on cron with zero manual input. Organic traffic grew to 11k/month and 103 indexed pages.",
      link: "pumpx.app/blog"
    },
    {
      id: "obs-assistant",
      name: "Observability Assistant",
      tagline: "LangGraph agent for debugging at Verizon",
      year: "2024",
      role: "Lead engineer",
      status: "Internal · adopted by multiple teams",
      description: "An AI agent that plans investigations across Splunk, Kubernetes, and Confluence to accelerate root-cause analysis. Used by multiple engineering teams. Built on LangGraph with a tool-use architecture.",
      link: null
    },
    {
      id: "iot-ingest",
      name: "IoT Ingestion Platform",
      tagline: "7k → 20k msg/sec, zero loss",
      year: "2019 — 2024",
      role: "Tech lead, primary architect",
      status: "Production",
      description: "Re-architected Verizon's legacy C#/Tibco IoT pipeline into an event-driven Java + Kafka system on OpenShift. Designed the ingestion and processing core: throughput vs ordering vs fault-tolerance trade-offs, DLQs, idempotent consumers, commit-after-success semantics.",
      link: null
    },
    {
      id: "video-analytics",
      name: "Video Analytics Pipelines",
      tagline: "2B events/day, 200M users/month",
      year: "2017 — 2019",
      role: "Senior engineer",
      status: "Shipped",
      description: "Spark batch + streaming jobs for Brightcove's analytics platform. Orchestration with Airflow. Led a TB-scale migration from on-prem to cloud object storage.",
      link: null
    }
  ],

  skills: {
    "Platform & Distributed Systems": ["Kafka", "Spark", "Spark Streaming", "Hadoop", "Airflow", "Druid", "Real-time pipelines", "Batch pipelines"],
    "AI / Applied Systems": ["LLMs", "LangChain", "LangGraph", "AI agents", "RAG"],
    "Backend": ["Java", "Spring Boot", "Microservices", "REST", "Event-driven"],
    "Cloud & Infra": ["AWS", "Kubernetes", "OpenShift", "Docker", "CI/CD", "Prometheus", "Grafana", "Splunk"],
    "Full-stack": ["React Native", "TypeScript", "Redux"],
    "Languages": ["Java", "Scala", "Python", "TypeScript", "JavaScript", "SQL"]
  },

  certifications: [
    { name: "Claude Certified Architect – Foundations", issuer: "Anthropic", url: "https://verify.skilljar.com/c/prwvpf7zwa8r" },
    { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", url: "https://verify.skilljar.com/c/dus7695kqp76" },
    { name: "Claude 101", issuer: "Anthropic", url: "https://verify.skilljar.com/c/zzo9f2feb3hg" },
    { name: "Claude Code in Action", issuer: "Anthropic", url: "https://verify.skilljar.com/c/vbk2959mkah4" },
    { name: "AWS Solutions Architect — Associate", issuer: "Amazon Web Services" },
    { name: "Google Cloud Professional Data Engineer", issuer: "Google Cloud" },
    { name: "Hortonworks HDPCD: Apache Spark", issuer: "Hortonworks" }
  ],

  education: [
    { school: "Saint Petersburg State Electrotechnical University", degree: "M.S. Computer Science & Applied Math", period: "2013 — 2015" },
    { school: "Saint Petersburg State Electrotechnical University", degree: "B.S. Computer Science & Applied Math", period: "2009 — 2013" }
  ]
};
