import {
  Box,
  Button,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name="Contact">
      <Box bg="gray.800" color="white" p="4rem 0 16rem 0" px={8}>
        <VStack spacing={10} maxW="800px" mx="auto">
          <Heading as="h2" size="2xl" textAlign="center" color="gray.200">
            Get in Touch
          </Heading>

          <Text fontSize="lg" textAlign="center" color="gray.200">
            I'd be happy to connect! If you have any questions or proposals,
            don't hesitate to reach out. Always ready to discuss new ideas!
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
    </Element>
  );
};

export default Contact;
