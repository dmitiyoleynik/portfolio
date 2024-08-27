import { Box, Flex, Heading, Text, Img, Icon, HStack } from '@chakra-ui/react';
import { ReactComponent as JavaScriptIcon } from '../../assets/JavaScript.svg';
import { skillsIcons } from '../../constants';

interface SkillProps {
  label: string;
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const SkillUI = ({ label, component }: SkillProps) => {
  return (
    <Box textAlign="center" padding="1rem">
      <Icon as={component} boxSize={'4rem'} />
      <Text>{label}</Text>
    </Box>
  );
};

const SkillsSection = () => {
  return (
    <Flex
      as="section"
      height="100vh"
      bg="gray.800"
      color="white"
      align="center"
      justify="center"
      direction="column"
      textAlign="center"
    >
      <Box>
        <Heading>My Skills</Heading>
        <Flex wrap="wrap" justify="center" padding="4rem 8rem">
          {skillsIcons.map(SkillUI)}
        </Flex>
      </Box>
    </Flex>
  );
};

export default SkillsSection;
