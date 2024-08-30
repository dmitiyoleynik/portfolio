import { ReactComponent as JavaScript } from 'assets/javaScript.svg';
import { ReactComponent as TypeScript } from 'assets/typeScript.svg';
import { ReactComponent as Apollo } from 'assets/apollo.svg';
import { ReactComponent as Chakra } from 'assets/chakra.svg';
import { ReactComponent as GraphQL } from 'assets/graphql.svg';
import { ReactComponent as MobX } from 'assets/mobx.svg';
import { ReactComponent as NodeJS } from 'assets/nodejs.svg';
import { ReactComponent as Redux } from 'assets/redux.svg';
import { ReactComponent as CICD } from 'assets/cicd.svg';
import { ReactComponent as HTML } from 'assets/html.svg';
import { ReactComponent as MUI } from 'assets/mui.svg';
import { ReactComponent as PostgreSQL } from 'assets/postgresql.svg';
import { ReactComponent as Storybook } from 'assets/storybook.svg';
import { ReactComponent as AWS } from 'assets/aws.svg';
import { ReactComponent as CSS } from 'assets/css.svg';
import { ReactComponent as Ionic } from 'assets/ionic.svg';
import { ReactComponent as MySQL } from 'assets/mysql.svg';
import { ReactComponent as Prisma } from 'assets/prisma.svg';
import { ReactComponent as StyledComponents } from 'assets/styledComponents.svg';
import { ReactComponent as AzureDevOps } from 'assets/azuredevops.svg';
import { ReactComponent as Docker } from 'assets/docker.svg';
import { ReactComponent as Jest } from 'assets/jest.svg';
import { ReactComponent as NextJS } from 'assets/nextjs.svg';
import { ReactComponent as ReactQuery } from 'assets/reactQuery.svg';
import { ReactComponent as ReactJS } from 'assets/react.svg';
import { ReactComponent as Vite } from 'assets/vite.svg';
import { ReactComponent as Capacitor } from 'assets/capacitor.svg';
import { ReactComponent as Git } from 'assets/git.svg';
import { ReactComponent as NestJS } from 'assets/nest.svg';
import tmpPicture from 'assets/tmp.webp';
import { Education } from 'types';

export const skillsIcons = [
  { component: JavaScript, label: 'JavaScript' },
  { component: TypeScript, label: 'TypeScript' },
  { component: Apollo, label: 'Apollo' },
  { component: Chakra, label: 'Chakra UI' },
  { component: GraphQL, label: 'GraphQL' },
  { component: MobX, label: 'MobX' },
  { component: NodeJS, label: 'Node.js' },
  { component: Redux, label: 'Redux' },
  { component: CSS, label: 'CSS' },
  { component: Ionic, label: 'Ionic' },
  { component: MySQL, label: 'MySQL' },
  { component: Docker, label: 'Docker' },
  { component: Prisma, label: 'Prisma' },
  { component: AzureDevOps, label: 'Azure DevOps' },
  { component: Jest, label: 'Jest' },
  { component: NextJS, label: 'Next.js' },
  { component: ReactQuery, label: 'React Query' },
  { component: ReactJS, label: 'React' },
  { component: Vite, label: 'Vite' },
  { component: NestJS, label: 'Nest.js' },
  { component: Git, label: 'Git' },
  { component: Capacitor, label: 'Capacitor' },
  { component: CICD, label: 'CI/CD' },
  { component: HTML, label: 'HTML' },
  { component: Storybook, label: 'Storybook' },
  { component: AWS, label: 'AWS' },
  { component: MUI, label: 'Material-UI' },
  { component: PostgreSQL, label: 'PostgreSQL' },
  { component: StyledComponents, label: 'Styled Components' },
];
export const projects = [
  {
    name: 'Portfolio Website (In Progress)',
    techStack: [ReactJS, TypeScript, NodeJS, Docker],
    description:
      'This project is currently under development. It will be a personal portfolio website showcasing my projects, skills, and experience. The site will be built with React and TypeScript on the frontend, and Node.js on the backend, with Docker for containerization.',
    demoLink: '#',
    githubLink: '#',
    screenshot: tmpPicture,
  },
  {
    name: 'E-commerce Platform (In Progress)',
    techStack: [ReactJS, NodeJS, GraphQL],
    description:
      'This project is currently in the works. It will be a comprehensive e-commerce platform featuring product listings, a shopping cart, and payment integration. The frontend will utilize React and GraphQL, with Node.js and MongoDB handling the backend and data storage.',
    demoLink: '#',
    githubLink: '#',
    screenshot: tmpPicture,
  },
  {
    name: 'Social Media App (In Progress)',
    techStack: [ReactJS, TypeScript, NodeJS, Docker],
    description:
      'This social media application is currently being developed. It will allow users to create profiles, post updates, and interact with others. The project will be built with React and TypeScript on the frontend, Node.js and MongoDB on the backend, and Docker for deployment.',
    demoLink: '#',
    githubLink: '#',
    screenshot: tmpPicture,
  },
];

export const sectionsNames = [
  'Home',
  'Skills',
  'Projects',
  'Experience',
  'Education',
  'Contact',
];

export const educationData: Education[] = [
  {
    degree: "Master's degree in Computer Science",
    institution: 'Dnipro University of Technology',
    range: 'September 2022 - June 2024',
    description: 'Dnipro, Ukraine',
  },
  {
    degree: "Bachelor's degree in Computer Science",
    institution: 'Ukrainian State University of Science and Technologies',
    range: 'September 2015 - June 2019',
    description: 'Dnipro, Ukraine',
  },
];

export const experience = [
  {
    position: 'FullStack Developer',
    company: 'Darly Solutions',
    range: 'October 2023 – Present',
    description: `
      In this project, I worked on developing a management system for an American utility infrastructure company. The application provided extensive map functionalities for visualizing geographic locations, utility lines, and making real-time updates to project plans. Additionally, a tablet application was developed to assist field workers with navigation and report submissions. My work focused on the browser version using React, Apollo Client, Ionic UI Components, CSS, and CSS Modules. I also developed and supported Android and iOS versions for tablets. Besides that, I supported backend development using Nest.js, Prisma.js, and SQL, and upgraded the application to the latest Ionic 7, transitioned from WebPack to Vite, and from npm to yarn. I implemented offline mode and developed an Ionic Plugin to integrate different Map SDK versions. To streamline the development environment setup, I created a Docker Compose file and worked with CI/CD pipelines and manual deployments on AWS.
    `,
  },
  {
    position: 'Frontend Developer',
    company: 'Ardas',
    range: 'February 2021 – September 2023',
    description: `
      During my time at Ardas, I worked on several projects, including developing an email template builder, a stock market monitoring platform, and a telecommunications company website. I developed reusable components, drag-and-drop interfaces, and ensured consistent state management using React, TypeScript, CSS Modules, and Redux. For the stock market monitoring platform, I implemented real-time data processing, user account management, and data visualization. In the telecommunications company project, I developed intuitive user interfaces optimized for performance and accessibility using React, MobX, Chakra UI, and TypeScript.
    `,
  },
  {
    position: 'Fullstack Developer',
    company: 'SoftServe',
    range: 'June 2019 – February 2021',
    description: `
      At SoftServe, I worked on various projects, including a medical device data configuration and migration tool, a home inventory management system, and enterprise automation with ServiceNow. I developed web applications for data configuration, migration, and inventory management using React, Redux, Saga, ASP.NET Core, and GraphQL. Additionally, I designed backend architectures and APIs to ensure the reliability and scalability of applications. I also developed automation scripts using ServiceNow to streamline business workflows.
    `,
  },
];
