import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/navbar/navbar';
import { Experience, Home, Projects, Skills } from './components/sections';
import Contact from './components/sections/contact';
import Education from './components/sections/education';

function App() {
  return (
    <Box>
      <Navbar />
      <Flex bg="gray.800" direction="column" gap={'6rem'}>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </Flex>
    </Box>
  );
}

export default App;
