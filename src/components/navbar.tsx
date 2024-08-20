import { Box, Flex, Spacer } from '@chakra-ui/react';

const sections = [
  'Home',
  'Projects',
  'Skills',
  'Experience',
  'Education',
  'Contact',
];

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
      {sections.map((section, index) => (
        <Box
          key={index}
          padding="0.25rem 0.75rem" // Зменшені відступи
          fontSize="0.875rem" // Зменшений розмір шрифту
          borderRadius="full"
          _hover={{ bg: 'gray.700', cursor: 'pointer' }}
          transition="background-color 0.2s ease"
          margin="0 0.5rem" // Зменшена відстань між секціями
        >
          {section}
        </Box>
      ))}
    </Flex>
  );
};

export default Navbar;
