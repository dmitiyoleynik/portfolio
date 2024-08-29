import { SVG } from '../../../types';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Text,
  Button,
  Link,
  Image,
  HStack,
  Stack,
  Flex,
} from '@chakra-ui/react';

interface ProjectItemProps {
  name: string;
  techStack: SVG[];
  description: string;
  demoLink: string;
  githubLink: string;
  screenshot?: string;
}

const ProjectItem = ({
  name,
  techStack,
  description,
  demoLink,
  githubLink,
  screenshot,
}: ProjectItemProps) => {
  return (
    <Card
      bg="gray.700"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      direction="row"
      margin="0 6rem"
      height="auto"
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Flex direction="column" align="start" flex="1">
          <Heading size="lg" marginBottom="1rem">
            {name}
          </Heading>
          <HStack align="end" spacing="1rem" marginBottom="1rem">
            <Text fontSize="md" color="gray.400">
              Made with:
            </Text>
            {techStack.map((component, index) => (
              <Icon as={component} key={index} boxSize="1.5rem" />
            ))}
          </HStack>
          <Text textAlign="left" fontSize="md" marginBottom="1rem">
            {description}
          </Text>
          <HStack spacing="1rem" justifySelf="end" marginTop="auto">
            <Button as={Link} href={demoLink} colorScheme="blue" isExternal>
              Demo
            </Button>
            <Button as={Link} href={githubLink} colorScheme="gray" isExternal>
              GitHub
            </Button>
          </HStack>
        </Flex>
      </CardBody>
      {screenshot && (
        <Image
          src={screenshot}
          alt={`${name} screenshot`}
          objectFit="cover"
          maxWidth="40%"
          borderTopLeftRadius="8px"
          marginTop="2rem"
        />
      )}
    </Card>
  );
};

export default ProjectItem;
