import { Box, Icon, Text } from '@chakra-ui/react';

import withAppear from 'HOC/withAppear';
import { SVG } from 'types';

interface SkillItemProps {
  label: string;
  component: SVG;
}

const SkillItem = ({ label, component }: SkillItemProps) => {
  return (
    <Box
      textAlign="center"
      padding="1rem"
      flex="1 1"
      flexBasis={{
        base: '50%',
        sm: '30%',
        md: '25%',
        lg: '20%',
        xl: '10%',
      }}
    >
      <Icon as={component} boxSize={{ base: '3rem', md: '4rem', lg: '5rem' }} />
      <Text>{label}</Text>
    </Box>
  );
};

export default withAppear(SkillItem);
