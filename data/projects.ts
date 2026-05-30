export type ProjectCategory = "AI" | "Web" | "Full Stack";

export type ProjectFilter =
  | "Full Stack"
  | "AI"
  | "Healthcare"
  | "Browser Extension"
  | "Backend"
  | "RAG";

export type ProjectLink = {
  label: string;
  href?: string;
  note?: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectDemo = {
  title: string;
  description: string;
  items: string[];
};

export type ProjectArchitecture = {
  title: string;
  steps: string[];
};

export type ProjectCaseStudy = {
  problem: string;
  role: string;
  contribution: string[];
  keyFeatures: string[];
  architecture?: ProjectArchitecture;
  challenges: ProjectChallenge[];
  demo: ProjectDemo;
  result: string;
  links: {
    live: ProjectLink;
    github: ProjectLink;
    caseStudy: ProjectLink;
  };
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  image: string;
  featured: boolean;
  highlights: string[];
  badges: string[];
  filters: ProjectFilter[];
  status: string;
  caseStudy: ProjectCaseStudy;
};

export const projectFilters: Array<"All" | ProjectFilter> = [
  "All",
  "Full Stack",
  "AI",
  "Healthcare",
  "Browser Extension",
  "Backend",
  "RAG",
];

export const projects: Project[] = [
  {
    slug: "globaHealth-emr",
    title: "GlobaHealth EMR",
    category: "Full Stack",
    summary:
      "A modern electronic medical record system designed for global health clinics, with patient management, appointment scheduling, and medical record keeping.",
    description:
      "GlobaHealth EMR is a comprehensive electronic medical record system tailored for global health clinics. It provides patient management, appointment scheduling, medical record keeping, and AI-assisted clinical documentation workflows.",
    stack: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "OpenAI API",
      "PHP",
      "MySQL",
      "Laravel",
    ],
    image: "/projects/globahealthEMR.PNG",
    featured: true,
    status: "In Development",
    badges: ["Healthcare", "Full Stack", "AI Powered", "Private Code"],
    filters: ["Full Stack", "AI", "Healthcare", "Backend"],
    highlights: [
      "Patient management system with secure record keeping.",
      "Appointment scheduling with clinic workflow support.",
      "AI-powered medical note generation and insights.",
    ],
    features: [
      "Patient management system",
      "Appointment scheduling",
      "AI-powered medical notes",
    ],
    caseStudy: {
      problem:
        "Clinics need a practical way to manage patient records, appointments, and documentation without moving between disconnected tools.",
      role:
        "Full-stack developer focused on the frontend screens, Laravel API integration, healthcare workflow logic, and AI-assisted documentation features.",
      contribution: [
        "Built responsive EMR dashboard screens for patient, appointment, and record workflows.",
        "Connected React UI flows with Laravel/PHP backend APIs and MySQL data models.",
        "Implemented authentication-aware navigation and role-based interface patterns.",
        "Integrated OpenAI-powered note generation where AI support adds clinical productivity value.",
        "Improved validation, loading states, and error handling across form-heavy workflows.",
      ],
      keyFeatures: [
        "Patient profile and medical record management.",
        "Appointment scheduling for clinic operations.",
        "AI-assisted medical note generation.",
        "Responsive dashboard UI for daily healthcare workflows.",
        "Secure backend structure using Laravel and MySQL.",
      ],
      architecture: {
        title: "EMR request and AI workflow",
        steps: ["Frontend", "API", "Auth", "Database", "AI Service", "Response"],
      },
      challenges: [
        {
          challenge:
            "Healthcare screens require many form states and patient context without overwhelming the user.",
          solution:
            "Grouped workflows into focused dashboard sections with clear validation, readable layouts, and predictable navigation.",
        },
        {
          challenge:
            "AI features needed to support the workflow without replacing the core clinical record process.",
          solution:
            "Kept AI output as an assistive layer connected through the API, with the main record flow remaining controlled by the user.",
        },
      ],
      demo: {
        title: "Clinical workflow preview",
        description:
          "Real screenshots are shown where available. Additional walkthrough media can be added as the product matures.",
        items: ["Live workflow preview", "Screenshot placeholder", "Demo video coming soon"],
      },
      result:
        "The project demonstrates full-stack healthcare product thinking: structured patient workflows, secure data handling, and practical AI integration.",
      links: {
        live: {
          label: "Live Demo",
          href: "https://emr.globahealth.ai-health.org.uk/",
        },
        github: { label: "Private Code", note: "Repository access is private." },
        caseStudy: { label: "Case Study", href: "/projects/globaHealth-emr" },
      },
    },
  },
  {
    slug: "eapply",
    title: "eApply autofill browser extension",
    category: "AI",
    summary:
      "eApply extracts data from documents and fills forms instantly with AI-powered accuracy.",
    description:
      "eApply is a browser extension that uses AI to extract structured data from resumes, certificates, images, and job-related documents, then automatically fills web forms with that information.",
    stack: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "Express.js",
      "Node.js",
      "MySQL",
      "Redux",
      "OCR API",
      "LangChain",
      "Groq",
    ],
    image: "/projects/eapplylogo.PNG",
    featured: true,
    status: "In Development",
    badges: ["AI Powered", "Browser Extension", "Automation", "Private Code"],
    filters: ["AI", "Browser Extension", "Backend"],
    highlights: [
      "AI-powered data extraction from resumes, certificates, job descriptions, and images.",
      "Autofill workflow for visa, university, job, and other application forms.",
      "OCR-assisted document parsing to reduce repetitive manual entry.",
    ],
    features: ["AI-powered data extraction", "Form autofill", "OCR support"],
    caseStudy: {
      problem:
        "Users often repeat the same personal, academic, and work information across long forms, which is slow and error-prone.",
      role:
        "Full-stack and extension developer focused on browser extension UI, extraction workflows, API integration, and automation logic.",
      contribution: [
        "Built responsive extension and web dashboard screens with React, TypeScript, and TailwindCSS.",
        "Created REST API integration between the extension, backend services, OCR, and AI extraction logic.",
        "Implemented structured data mapping so extracted document fields can be reused in web forms.",
        "Integrated AI/OCR workflows for resumes, certificates, images, and job-related documents.",
        "Improved validation, loading feedback, and error states for document processing flows.",
      ],
      keyFeatures: [
        "AI document extraction for resumes and certificates.",
        "OCR support for image-based documents.",
        "Browser form autofill automation.",
        "Reusable extracted profile data.",
        "Backend workflow support with Node.js, Express, and MySQL.",
      ],
      architecture: {
        title: "Document extraction and autofill flow",
        steps: ["Document", "OCR/API", "AI Parser", "Structured Data", "Extension", "Autofill"],
      },
      challenges: [
        {
          challenge:
            "Document formats vary widely, so extracted information can be incomplete or inconsistent.",
          solution:
            "Used structured extraction steps and validation-ready data mapping before passing results to autofill screens.",
        },
        {
          challenge:
            "Browser automation needs to feel fast while still handling remote API and AI latency.",
          solution:
            "Added clear loading and workflow states so users understand what the extension is processing.",
        },
      ],
      demo: {
        title: "Autofill workflow preview",
        description:
          "The live product link is available. Additional guided demos and screen captures can be added as release assets are finalized.",
        items: ["Live workflow preview", "Screenshot placeholder", "Demo video coming soon"],
      },
      result:
        "The project shows practical AI automation with a real browser workflow, backend services, and user-facing productivity value.",
      links: {
        live: { label: "Live Demo", href: "https://eapply.site/" },
        github: { label: "Private Code", note: "Repository access is private." },
        caseStudy: { label: "Case Study", href: "/projects/eapply" },
      },
    },
  },
  {
    slug: "emr-accounting-system",
    title: "EMR Accounting System",
    category: "Full Stack",
    summary:
      "A comprehensive EMR accounting and financial management system designed for clinics, hospitals, and healthcare organizations.",
    description:
      "The EMR Accounting System is a full-stack healthcare finance and management platform built to streamline medical billing, patient payments, expense tracking, financial reporting, and operational workflows.",
    stack: [
      "React.js",
      "JavaScript",
      "Laravel",
      "MySQL",
      "Bootstrap",
      "REST API",
      "Chart.js",
    ],
    image: "/projects/emrac.png",
    featured: true,
    status: "In Development",
    badges: ["Healthcare", "Full Stack", "Backend", "Private Code"],
    filters: ["Full Stack", "Healthcare", "Backend"],
    highlights: [
      "Integrated accounting and EMR workflow management.",
      "Secure patient billing and financial transaction system.",
      "Advanced dashboard with real-time financial analytics.",
      "Scalable architecture for clinics and healthcare organizations.",
      "Role-based access control for admins, doctors, and accountants.",
    ],
    features: [
      "Patient Billing Management",
      "Invoice & Payment Tracking",
      "Expense Management",
      "Financial Reporting Dashboard",
      "Role-Based Authentication",
      "Consultation Fee Management",
      "Transaction History Logs",
      "Responsive Admin Dashboard",
      "Data Export & Reporting",
      "Real-Time Analytics",
    ],
    caseStudy: {
      problem:
        "Healthcare teams need billing, payments, expenses, and EMR-related financial activity in one workflow instead of separate spreadsheets or manual processes.",
      role:
        "Full-stack developer focused on dashboard UI, REST API integration, role-aware workflows, and financial reporting screens.",
      contribution: [
        "Built responsive frontend screens for billing, invoices, expenses, and reporting.",
        "Created REST API integration between React screens and Laravel backend endpoints.",
        "Implemented role-based access patterns for admins, doctors, and accountants.",
        "Built dashboard views for transaction history, financial summaries, and analytics.",
        "Improved form validation, empty states, loading states, and error handling.",
      ],
      keyFeatures: [
        "Patient billing and invoice tracking.",
        "Payment and expense management.",
        "Role-based dashboard experience.",
        "Financial reporting and chart views.",
        "Transaction history and export-ready data structure.",
      ],
      architecture: {
        title: "Healthcare finance workflow",
        steps: ["Dashboard", "REST API", "Auth", "MySQL", "Reports", "Exports"],
      },
      challenges: [
        {
          challenge:
            "Accounting workflows need clear data relationships between patients, consultations, invoices, and payments.",
          solution:
            "Organized the UI and backend integration around predictable financial entities and transaction history.",
        },
        {
          challenge:
            "Different healthcare staff need different levels of visibility.",
          solution:
            "Designed role-aware access patterns so each user type can focus on relevant actions and reports.",
        },
      ],
      demo: {
        title: "Dashboard and finance preview",
        description:
          "The current portfolio uses a screenshot preview while live demo access and walkthrough media are prepared.",
        items: ["Screenshot placeholder", "Live workflow preview", "Demo video coming soon"],
      },
      result:
        "The system demonstrates backend-heavy full-stack thinking for healthcare operations, financial workflows, and dashboard reporting.",
      links: {
        live: { label: "Demo Coming Soon", note: "A public demo is not available yet." },
        github: { label: "Private Code", note: "Repository access is private." },
        caseStudy: {
          label: "Case Study",
          href: "/projects/emr-accounting-system",
        },
      },
    },
  },
  {
    slug: "qa-creator",
    title: "QA Creator",
    category: "AI",
    summary:
      "An AI-powered application that automatically generates meaningful questions and answers from PDF documents using LLMs and Retrieval-Augmented Generation (RAG).",
    description:
      "The QA Creator App is an intelligent question-answer generation platform built with FastAPI, LangChain, FAISS, and Hugging Face models. Users can upload PDF documents, process embeddings, and generate contextual questions and answers.",
    stack: [
      "React.js",
      "JavaScript",
      "Python",
      "FastAPI",
      "LangChain",
      "FAISS",
      "HuggingFace",
      "LLMs",
      "TailwindCSS",
      "PDF Processing",
    ],
    image: "/projects/aq-creator.png",
    featured: true,
    status: "Open Source",
    badges: ["AI Powered", "RAG", "Backend", "Open Source"],
    filters: ["AI", "RAG", "Backend"],
    highlights: [
      "Upload and process PDF documents seamlessly.",
      "Automatic AI-generated question and answer creation.",
      "RAG-based architecture using LangChain and FAISS.",
      "Semantic search and embedding-powered retrieval.",
      "Export generated Q&A pairs directly into CSV format.",
      "FastAPI backend with scalable API structure.",
      "Responsive React frontend with clean UI/UX.",
      "Supports educational content generation and exam preparation.",
      "Efficient document chunking and vector storage pipeline.",
      "Production-ready modular architecture for future expansion.",
    ],
    features: [
      "PDF Upload System",
      "AI Question Generation",
      "Context-Aware Answer Generation",
      "CSV Export",
      "Vector Database Integration",
      "Embedding Search",
      "Responsive Dashboard",
      "REST API Integration",
      "Document Parsing",
      "Modular AI Pipeline",
    ],
    caseStudy: {
      problem:
        "Students and educators need faster ways to turn long PDF materials into useful study questions and contextual answers.",
      role:
        "AI-focused full-stack developer responsible for the React interface, FastAPI backend, RAG pipeline, document parsing, and export workflow.",
      contribution: [
        "Built responsive frontend screens for PDF upload, generation status, and Q&A review.",
        "Created REST API integration with a FastAPI backend.",
        "Implemented document parsing, chunking, embedding, and vector search flow with LangChain and FAISS.",
        "Integrated LLM-based question and answer generation for contextual study output.",
        "Added CSV export, loading states, validation, and error handling for long-running AI tasks.",
      ],
      keyFeatures: [
        "PDF upload and parsing.",
        "Document chunking and embedding pipeline.",
        "Vector retrieval with FAISS.",
        "LLM-generated questions and answers.",
        "CSV export for generated Q&A pairs.",
      ],
      architecture: {
        title: "RAG question generation flow",
        steps: ["Document/Data", "Chunking", "Embeddings", "Vector DB", "LLM", "Answer"],
      },
      challenges: [
        {
          challenge:
            "Long documents need to be processed into useful context before answer generation.",
          solution:
            "Used chunking, embeddings, and vector search so the generation step receives focused source context.",
        },
        {
          challenge:
            "AI generation can take time and needs clear UX feedback.",
          solution:
            "Designed a dashboard-style flow with status feedback and export-ready results.",
        },
      ],
      demo: {
        title: "RAG generation preview",
        description:
          "The repository is available for review. Portfolio demo media can be added when a hosted version is ready.",
        items: ["Screenshot placeholder", "Live workflow preview", "Demo video coming soon"],
      },
      result:
        "The project demonstrates a complete AI/RAG workflow from document ingestion to generated educational output.",
      links: {
        live: { label: "Demo Coming Soon", note: "A hosted demo is not available yet." },
        github: {
          label: "GitHub",
          href: "https://github.com/razibdash/QA-Creator-App",
        },
        caseStudy: { label: "Case Study", href: "/projects/qa-creator" },
      },
    },
  },
  {
    slug: "mu-chatbot",
    title: "MU Chat Bot",
    category: "AI",
    summary:
      "An AI-powered university chatbot designed to provide instant academic information, student support, and intelligent campus assistance.",
    description:
      "MU Chat Bot is an intelligent conversational AI platform developed for Metropolitan University Bangladesh. The system helps students access academic information, admission guidance, department details, course-related queries, and campus support through a modern chatbot interface.",
    stack: [
      "React.js",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "Python",
      "Pinecone",
      "AI Chatbot",
      "LangChain",
      "FastAPI",
    ],
    image: "/projects/mu-chatbot.png",
    featured: true,
    status: "Open Source",
    badges: ["AI Powered", "RAG", "Backend", "Open Source"],
    filters: ["AI", "RAG", "Backend"],
    highlights: [
      "AI-powered assistant for Metropolitan University students.",
      "Instant responses for academic and campus-related queries.",
      "Modern responsive UI with smooth animations and clean UX.",
      "Dynamic conversational interface with contextual understanding.",
      "Optimized for both desktop and mobile experiences.",
    ],
    features: [
      "Real-time AI Chat Interface",
      "University Information Assistance",
      "Admission & Course Guidance",
      "Responsive Modern UI",
      "Dark/Light Theme Support",
      "Smooth Framer Motion Animations",
      "Dynamic API Integration",
      "Fast Query Handling",
      "Student-Friendly Navigation",
      "Scalable Chatbot Architecture",
    ],
    caseStudy: {
      problem:
        "University students need fast, accessible answers about admissions, departments, courses, and campus support without searching across many pages.",
      role:
        "AI-focused developer responsible for chatbot UI, API integration, retrieval workflow, and responsive student-facing experience.",
      contribution: [
        "Built responsive chat screens with React, TailwindCSS, and Framer Motion.",
        "Created API integration for conversational requests and AI-generated responses.",
        "Implemented retrieval-oriented chatbot flow using LangChain and Pinecone.",
        "Improved conversational UX with loading states, readable response layout, and mobile polish.",
        "Structured the project for future expansion across university data sources.",
      ],
      keyFeatures: [
        "Real-time university chatbot interface.",
        "Academic and admission information support.",
        "Retrieval-based response workflow.",
        "Responsive mobile-friendly chat layout.",
        "Scalable API architecture for adding new knowledge sources.",
      ],
      architecture: {
        title: "Campus chatbot RAG flow",
        steps: ["University Data", "Chunking", "Embeddings", "Pinecone", "LLM", "Answer"],
      },
      challenges: [
        {
          challenge:
            "University information must be retrieved from the right context to avoid generic answers.",
          solution:
            "Used a retrieval pipeline so the chatbot can ground responses in relevant academic information.",
        },
        {
          challenge:
            "Chat interfaces must feel clear on small screens where long answers can become difficult to scan.",
          solution:
            "Focused on a clean conversational layout with readable spacing and mobile-first response blocks.",
        },
      ],
      demo: {
        title: "Chatbot interaction preview",
        description:
          "The repository is available for review. A hosted demo and walkthrough video can be added when deployment is finalized.",
        items: ["Screenshot placeholder", "Live workflow preview", "Demo video coming soon"],
      },
      result:
        "The project shows how AI retrieval can turn institutional information into a faster support experience for students.",
      links: {
        live: { label: "Demo Coming Soon", note: "A hosted demo is not available yet." },
        github: {
          label: "GitHub",
          href: "https://github.com/razibdash/MU-Chatbot",
        },
        caseStudy: { label: "Case Study", href: "/projects/mu-chatbot" },
      },
    },
  },
];
