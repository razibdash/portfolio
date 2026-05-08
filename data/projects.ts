export type ProjectCategory = "AI" | "Web" | "Full Stack";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "globaHealth-emr",
    title: "GlobaHealth EMR",
    category: "Full Stack",
    summary:
      "A modern electronic medical record system designed for global health clinics, with patient management, appointment scheduling, and medical record keeping.",
    description:
      "GlobaHealth EMR is a comprehensive electronic medical record system tailored for global health clinics. It provides seamless patient management, efficient appointment scheduling, and robust medical record keeping capabilities.",
    stack: [
      "React.js",
      "JavaScript",
      "bootstrap",
      "OpenAI API",
      "php",
      "mysql",
      "laravel",
    ],
    image: "/projects/globahealthEMR.PNG",
    github: "https://emr.globahealth.ai-health.org.uk/",
    live: "https://emr.globahealth.ai-health.org.uk/",
    featured: true,
    highlights: [
      "Patient management system with secure record keeping.",
      "Appointment scheduling with calendar integration.",
      "AI-powered medical note generation and insights.",
    ],
    features: [
      "Patient management system",
      "Appointment scheduling",
      "AI-powered medical notes",
    ],
  },
  {
    slug: "eapply",
    title: "eApply autofill browser extension",
    category: "AI",
    summary:
      "eApply extracts data from documents and fills forms instantly with AI-powered accuracy.",
    description:
      "eApply is a browser extension that uses AI to extract structured data from documents like resumes and job descriptions, then automatically fills out web forms with that information. It streamlines the application process and reduces manual entry.",
    stack: [
      "react.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "express.js",
      "node.js",
      "mySQL",
      "Redux",
      "OCR API",
      "Langchain",
      "groq",
    ],
    image: "/projects/eapplylogo.PNG",
    github: "https://eapply.site/",
    live: "https://eapply.site/",
    featured: true,
    highlights: [
      "AI-powered data extraction from resumes and job descriptions. SSC,HSC and graduation certificates. Also, it can extract data from images using OCR. It can extract data from any document and fill out web forms with that information. It streamlines the application process and reduces manual entry. visa application, university application, job application, and more.",
    ],
    features: ["AI-powered data extraction", "Form autofill", "OCR support"],
  },
  {
    slug: "emr-accounting-system",
    title: "EMR Accounting System",
    category: "Full Stack",
    summary:
      "A comprehensive EMR accounting and financial management system designed for clinics, hospitals, and healthcare organizations.",
    description:
      "The EMR Accounting System is a full-stack healthcare finance and management platform built to streamline medical billing, patient payments, expense tracking, financial reporting, and operational workflows. The system integrates accounting functionalities with Electronic Medical Record (EMR) processes, enabling healthcare providers to efficiently manage invoices, consultations, transactions, and financial analytics through a secure and scalable dashboard.",
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
    github: "https://github.com/",
    live: "https://example.com",
    featured: true,
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
  },
  {
    slug: "qa-creator",
    title: "QA Creator",
    category: "AI",
    summary:
      "An AI-powered application that automatically generates meaningful questions and answers from PDF documents using LLMs and Retrieval-Augmented Generation (RAG).",
    description:
      "The QA Creator App is an intelligent question-answer generation platform built with FastAPI, LangChain, FAISS, and Hugging Face models. Users can upload PDF documents, and the system automatically extracts content, processes embeddings, and generates high-quality contextual questions and answers using Large Language Models (LLMs). The generated Q&A pairs can be exported into CSV format for educational, research, and assessment purposes.",
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
    github: "https://github.com/razibdash/QA-Creator-App",
    live: "https://github.com/razibdash/QA-Creator-App",
    featured: true,
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
  },

  {
    slug: "mu-chatbot",
    title: "MU Chat Bot",
    category: "AI",
    summary:
      "An AI-powered university chatbot designed to provide instant academic information, student support, and intelligent campus assistance.",
    description:
      "MU Chat Bot is an intelligent conversational AI platform developed for Metropolitan University Bangladesh. The system helps students access academic information, admission guidance, department details, course-related queries, and campus support through a modern chatbot interface. Built with Next.js and AI technologies, the chatbot delivers fast, contextual, and user-friendly responses with a clean and responsive design.",
    stack: [
      "react.js",
      "javascript",
      "TailwindCSS",
      "Framer Motion",
      "python",
      "Pinecone",
      "AI Chatbot",
      "LangChain",
      "Fast API",
    ],
    image: "/projects/mu-chatbot.png",
    github: "https://github.com/razibdash/MU-Chatbot",
    live: "https://github.com/razibdash/MU-Chatbot",
    featured: true,
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
  },
];
