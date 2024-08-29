import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import avatar from '../../assets/avatar.jpg';

const Home = () => {
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
        <Avatar
          marginBottom="2rem"
          size="2xl"
          name="Dmytro Oliinyk"
          src={avatar}
        />
        <Heading as="h1" size="2xl" marginBottom="1rem" color="gray.200">
          Hi! I am Dmytro Oliinyk
        </Heading>
        <Text fontSize="xl" marginBottom="2rem" color="gray.200">
          Full Stack & Frontend Developer | React, Redux, TypeScript, Node.js
        </Text>
      </Box>
      <HStack>
        <Button
          as="a"
          href="https://github.com/dmitiyoleynik"
          width="8rem"
          _hover={{ bg: 'teal.800', color: 'white' }}
          rightIcon={<Icon as={FaGithub} />}
        >
          GitHub
        </Button>

        <Button
          as="a"
          href="https://www.linkedin.com/in/dmytro-oliinyk-452a5a199/"
          width="8rem"
          variant="outline"
          color={'white'}
          leftIcon={<Icon as={FaLinkedin} />}
          _hover={{ bg: 'linkedin.900', color: 'white' }}
        >
          Linkedin
        </Button>
      </HStack>
    </Flex>
  );
};

export default Home;
