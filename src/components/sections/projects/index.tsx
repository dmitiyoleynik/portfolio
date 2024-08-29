import { Flex, Heading } from '@chakra-ui/react';
import ProjectItem from './projectItem';
import { projects } from '../../../constants';

const Projects = () => {
  return (
    <Flex
      as="section"
      minHeight={{ xl: '100vh' }}
      bg="gray.800"
      color="white"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
    >
      <Heading padding="4rem">My Projects</Heading>
      <Flex width="100%" direction="column" gap="4rem">
        {projects.map(ProjectItem)}
      </Flex>
    </Flex>
  );
};

export default Projects;
