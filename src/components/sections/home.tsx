import { Button, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Element } from 'react-scroll';
import avatar from '../../assets/avatar.jpg';
import CustomAvatar from '../general/сustomAvatar';

const Home = () => {
  return (
    <Element name="Home">
      <Flex
        as="section"
        padding="12rem 0 4rem 0"
        bg="gray.800"
        color="white"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <CustomAvatar
          marginBottom="2rem"
          name="Dmytro Oliinyk"
          size="12rem"
          src={avatar}
        />
        <Heading as="h1" size="2xl" marginBottom="1rem" color="gray.200">
          Hi! I am Dmytro Oliinyk
        </Heading>
        <Text fontSize="xl" marginBottom="2rem" color="gray.200">
          Full Stack & Frontend Developer | React, Redux, TypeScript, Node.js
        </Text>
        <HStack py="2rem">
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
    </Element>
  );
};

export default Home;
