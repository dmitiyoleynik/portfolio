import { Box, Flex } from '@chakra-ui/react';

import { Navbar } from 'components/navbar';
import {
  Certificates,
  Contact,
  Education,
  Experience,
  Home,
  Projects,
  Skills,
} from 'components/sections';

function App() {
  return (
    <Box>
      <Navbar />
      <Flex bg="gray.800" direction="column" gap={'8rem'}>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Education />
        <Contact />
      </Flex>
    </Box>
  );
}

export default App;
