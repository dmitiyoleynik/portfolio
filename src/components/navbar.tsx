import { Box, Flex } from '@chakra-ui/react';
import { sectionsNames } from '../constants';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      bg="gray.900"
      color="white"
      align="center"
      justify="center"
      padding="0.5rem"
      borderRadius="full"
      boxShadow="md"
      position="fixed"
      top="1rem"
      left="50%"
      transform="translateX(-50%)"
      width="auto"
    >
      {sectionsNames.map((section, index) => (
        <Box
          key={index}
          padding="0.25rem 0.75rem"
          fontSize="0.875rem"
          borderRadius="full"
          _hover={{ bg: 'gray.700', cursor: 'pointer' }}
          transition="background-color 0.2s ease"
          margin="0 0.5rem"
        >
          {section}
        </Box>
      ))}
    </Flex>
  );
};

export default Navbar;
