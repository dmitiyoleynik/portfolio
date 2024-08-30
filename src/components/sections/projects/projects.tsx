import { Flex, Heading } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { projects } from '../../../constants';
import ProjectItem from './projectItem';

const Projects = () => {
  return (
    <Element name="Projects">
      <Flex
        as="section"
        bg="gray.800"
        color="white"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <Heading pb="4rem" color="gray.200">
          My Projects
        </Heading>
        <Flex width="100%" direction="column" gap="4rem" paddingBottom="2rem">
          {projects.map(ProjectItem)}
        </Flex>
      </Flex>
    </Element>
  );
};

export default Projects;
