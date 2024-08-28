import { Box, Flex, Heading } from '@chakra-ui/react';
import { skillsIcons } from '../../../constants';
import SkillItem from './skillItem';

const Skills = () => {
  return (
    <Flex
      as="section"
      height={{ xl: '100vh' }}
      bg="gray.800"
      color="white"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
    >
      <Box>
        <Heading padding={{ base: '8rem 2rem 2rem 2rem', xl: '2rem' }}>
          My Skills
        </Heading>
        <Flex
          wrap="wrap"
          justify="center"
          padding={{ base: '0 2rem', md: '0 4rem', xl: '0 8rem' }}
        >
          {skillsIcons.map((skill, index) => (
            <SkillItem
              key={index}
              label={skill.label}
              component={skill.component}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Skills;
