import { SuccessCaseProps } from "../containers/projects/Projects";
import tpImage from "../assets/tp.jpg";

const successCaseMocks: SuccessCaseProps[] = [
  {
    image: tpImage,
    title: "E-commerce Platform Modernization",
    technologies: ["react", "nodejs", "graphql", "aws"],
    description:
      "We revamped an outdated e-commerce platform, implementing a headless architecture that improved performance, scalability, and user experience. The platform now supports thousands of concurrent users with minimal downtime.",
    links: [
      {
        children: "View Case Study",
        href: "https://example.com/project1",
      },
      {
        children: "View Example page",
        href: "https://example.com/project1",
      },
      {
        children: "Github Repo",
        href: "https://github.com/company/project1",
      },
    ],
  },
  {
    image: tpImage,
    title: "FinTech Mobile App Development",
    technologies: ["flutter", "firebase", "typescript"],
    description:
      "Developed a mobile application for a fintech startup, allowing users to manage their finances on the go. The app integrates seamlessly with multiple banking APIs and has robust security features.",
    links: [
      {
        children: "Learn More",
        href: "https://example.com/project2",
      },
      {
        children: "App Store",
        href: "https://appstore.com/project2",
      },
    ],
  },
  {
    image: tpImage,
    title: "AI-Powered Analytics Dashboard",
    technologies: ["python", "django", "react", "tensorflow", "jira"],
    description:
      "Created an AI-powered analytics dashboard that provides real-time insights and predictions based on large datasets. This solution helped the client increase decision-making speed and accuracy.",
    links: [
      {
        children: "Explore the Dashboard",
        href: "https://example.com/project3",
      },
      {
        children: "Documentation",
        href: "https://docs.example.com/project3",
      },
    ],
  },
];

export default successCaseMocks;
