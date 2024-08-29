import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  VStack,
  HStack,
} from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <Box bg="gray.900" color="white" py={16} px={8}>
      <VStack spacing={10} maxW="800px" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center">
          Get in Touch
        </Heading>

        <Text fontSize="lg" textAlign="center" color="gray.400">
          I'd be happy to connect! If you have any questions or proposals, don't
          hesitate to reach out. Always ready to discuss new ideas!
        </Text>

        <Stack spacing={4} width="100%" align="center">
          <Link href="mailto:your-email@example.com" isExternal width="100%">
            <Button size="lg" width="100%" bgColor="gray.300" variant="solid">
              Email Me
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile"
            isExternal
            width="100%"
          >
            <Button size="lg" width="100%" bgColor="gray.300" variant="solid">
              Connect on LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/yourprofile" isExternal width="100%">
            <Button size="lg" width="100%" bgColor="gray.300" variant="solid">
              Check My GitHub
            </Button>
          </Link>
          <Link href="/path-to-your-cv.pdf" isExternal download width="100%">
            <Button size="lg" width="100%" bgColor="gray.300" variant="solid">
              Download My CV
            </Button>
          </Link>
        </Stack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
