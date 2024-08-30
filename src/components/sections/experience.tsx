import { Flex, Heading } from '@chakra-ui/react';
import { FaBriefcase } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { VerticalTimeline } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { experience } from 'appConstants';
import VerticalTimeLineItem from 'components/general/verticalTimeline';

const Experience = () => {
  return (
    <Element name="Experience">
      <Flex
        as="section"
        bg="gray.800"
        color="white"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
      >
        <Heading marginBottom="2rem" color="gray.200">
          My Experience
        </Heading>
        <VerticalTimeline>
          {experience.map(({ position, company, description, range }) => (
            <VerticalTimeLineItem
              key={company}
              title={position}
              subtitle={company}
              description={description}
              timeRange={range}
              icon={<FaBriefcase />}
            />
          ))}
        </VerticalTimeline>
      </Flex>
    </Element>
  );
};

export default Experience;
