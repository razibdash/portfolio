export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: "next.js-15",
    title: "Next.js 15 Basic to advance",
    issuer: "Professional Learning",
    year: "2025",
    image: "/certificates/certificates2.jpg",
  },

  {
    id: "laravel",
    title: "Laravel Career Launchpad for Absolute Beginner",
    issuer: "Developer Program",
    year: "2024",
    image: "/certificates/laravelcrt.PNG",
  },
  {
    id: "cyber",
    title: "Technical Career counseling Webinar Session on Cyber Security",
    issuer: "webinar",
    year: "2024",
    image: "/certificates/cyberCtr.PNG",
  },

  {
    id: "data-science",
    title: "Data Science Fundamentals",
    issuer: "Data Science",
    year: "2024",
    image: "/certificates/datascienceCrt.PNG",
  },
  {
    id: "ICPC",
    title: "International Collegiate Programming Contest",
    issuer: "Programming Contest",
    year: "2023",
    image: "/certificates/icpcCrt.PNG",
  },
  {
    id: "sqa",
    title: "SQA Workshop for Absolute Beginners",
    issuer: "SQA",
    year: "2025",
    image: "/certificates/sqaCrt.PNG",
  },
];
