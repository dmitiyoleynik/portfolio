import { Flex, Heading } from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { educationData } from 'appConstants';
import VerticalTimeLineItem from 'components/general/verticalTimeline';

const Education = () => {
  return (
    <Element name="Education">
      <Flex
        as="section"
        bg="gray.800"
        color="white"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mt={10}
          mb={6}
          color="gray.200"
        >
          My Education
        </Heading>
        <VerticalTimeline>
          {educationData.map(({ degree, institution, range, description }) => (
            <VerticalTimeLineItem
              key={degree}
              title={degree}
              subtitle={institution}
              description={description}
              timeRange={range}
              icon={<FaGraduationCap />}
            />
          ))}
        </VerticalTimeline>
      </Flex>
    </Element>
  );
};

export default Education;
