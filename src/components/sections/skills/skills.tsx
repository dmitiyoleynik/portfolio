import { Box, Flex, Heading } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { skillsIcons } from 'appConstants';
import SkillItem from 'components/sections/skills/skillItem';

const Skills = () => {
  return (
    <Element name="Skills">
      <Flex
        as="section"
        bg="gray.800"
        color="white"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <Box>
          <Heading paddingBottom="4rem" color="gray.200">
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
    </Element>
  );
};

export default Skills;
