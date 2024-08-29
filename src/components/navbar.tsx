import { Box, Flex } from '@chakra-ui/react';
import { sectionsNames } from '../constants';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

const Navbar = () => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Flex
      as="nav"
      bg="gray.900"
      color="white"
      align="center"
      justify="center"
      padding="0.5rem"
      borderRadius={isSmallScreen ? 'none' : 'full'}
      boxShadow="md"
      position="fixed"
      top={isSmallScreen ? 0 : '1rem'}
      left="50%"
      transform="translateX(-50%)"
      width={isSmallScreen ? '100%' : 'auto'}
      zIndex="1000"
      wrap={isSmallScreen ? 'wrap' : 'nowrap'}
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
