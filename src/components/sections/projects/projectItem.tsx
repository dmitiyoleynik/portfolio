import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import withAppear from 'HOC/withAppear';
import useIsSmallScreen from 'hooks/useIsSmallScreen';
import { SVG } from 'types';

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
  const isSmallScreen = useIsSmallScreen();
  return (
    <Card
      key={name}
      bg="gray.700"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      direction="row"
      mx={{ base: '2rem', md: '6rem' }}
      height="auto"
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Flex direction="column" align="start" flex="1">
          <Heading size="lg" marginBottom="1rem" color="gray.200">
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
          <Text
            textAlign="left"
            fontSize="md"
            marginBottom="1rem"
            color="gray.200"
          >
            {description}
          </Text>
          <HStack spacing="1rem" justifySelf="end" marginTop="auto">
            <Button
              as={Link}
              href={demoLink}
              colorScheme="gray"
              color="whiteAlpha.800"
              variant="outline"
              isExternal
              _hover={{
                bg: 'blue.500',
                borderColor: 'blue.500',
                color: 'white',
              }}
            >
              Demo
            </Button>

            <Button
              as={Link}
              href={githubLink}
              colorScheme="gray"
              isExternal
              _hover={{ bg: 'gray.600', color: 'white' }}
            >
              GitHub
            </Button>
          </HStack>
        </Flex>
      </CardBody>
      {screenshot && !isSmallScreen && (
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

export default withAppear(ProjectItem);
