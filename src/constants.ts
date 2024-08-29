import { ReactComponent as JavaScript } from './assets/javaScript.svg';
import { ReactComponent as TypeScript } from './assets/typeScript.svg';
import { ReactComponent as Apollo } from './assets/apollo.svg';
import { ReactComponent as Chakra } from './assets/chakra.svg';
import { ReactComponent as GraphQL } from './assets/graphql.svg';
import { ReactComponent as MobX } from './assets/mobx.svg';
import { ReactComponent as NodeJS } from './assets/nodejs.svg';
import { ReactComponent as Redux } from './assets/redux.svg';
import { ReactComponent as CICD } from './assets/cicd.svg';
import { ReactComponent as HTML } from './assets/html.svg';
import { ReactComponent as MUI } from './assets/mui.svg';
import { ReactComponent as PostgreSQL } from './assets/postgresql.svg';
import { ReactComponent as Storybook } from './assets/storybook.svg';
import { ReactComponent as AWS } from './assets/aws.svg';
import { ReactComponent as CSS } from './assets/css.svg';
import { ReactComponent as Ionic } from './assets/ionic.svg';
import { ReactComponent as MySQL } from './assets/mysql.svg';
import { ReactComponent as Prisma } from './assets/prisma.svg';
import { ReactComponent as StyledComponents } from './assets/styledComponents.svg';
import { ReactComponent as AzureDevOps } from './assets/azuredevops.svg';
import { ReactComponent as Docker } from './assets/docker.svg';
import { ReactComponent as Jest } from './assets/jest.svg';
import { ReactComponent as NextJS } from './assets/nextjs.svg';
import { ReactComponent as ReactQuery } from './assets/reactQuery.svg';
import { ReactComponent as ReactJS } from './assets/react.svg';
import { ReactComponent as Vite } from './assets/vite.svg';
import { ReactComponent as Capacitor } from './assets/capacitor.svg';
import { ReactComponent as Git } from './assets/git.svg';
import { ReactComponent as NestJS } from './assets/nest.svg';
import tmpPicture from './assets/tmp.webp';

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
    name: 'Portfolio Website',
    techStack: [ReactJS, TypeScript, NodeJS, Docker],
    description:
      'A personal portfolio website to showcase my projects, skills, and experience. Built with React and TypeScript on the frontend, and Node.js on the backend. The site is containerized using Docker for easy deployment.',
    demoLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio-website',
    screenshot: tmpPicture,
  },
  {
    name: 'E-commerce Platform',
    techStack: [ReactJS, NodeJS, GraphQL],
    description:
      'A full-featured e-commerce platform that includes product listings, a shopping cart, and payment integration. The frontend is built with React and GraphQL, while the backend uses Node.js and MongoDB for data storage.',
    demoLink: 'https://myecommerce.com',
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    screenshot: tmpPicture,
  },
  {
    name: 'Social Media App',
    techStack: [ReactJS, TypeScript, NodeJS, Docker],
    description:
      'A social media application where users can create profiles, post updates, and interact with others. Built with React and TypeScript for the frontend, Node.js and MongoDB for the backend, and Docker for deployment.',
    demoLink: 'https://mysocialapp.com',
    githubLink: 'https://github.com/yourusername/social-media-app',
    screenshot: 'https://mysocialapp.com/screenshot.png',
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
