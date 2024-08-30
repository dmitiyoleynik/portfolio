import { Flex, Heading } from '@chakra-ui/react';
import { FaAward } from 'react-icons/fa';
import { Element } from 'react-scroll';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { certificates } from 'appConstants';
import VerticalTimeLineItem from 'components/general/verticalTimeline';

const Certificates = () => {
  return (
    <Element name="Certificates">
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
          My Certificates
        </Heading>
        <VerticalTimeline>
          {certificates.map(
            ({ title, issuingOrganization, issueDate, description }) => (
              <VerticalTimeLineItem
                key={title}
                title={title}
                subtitle={issuingOrganization}
                description={description}
                timeRange={issueDate}
                icon={<FaAward />}
              />
            )
          )}
        </VerticalTimeline>
      </Flex>
    </Element>
  );
};

export default Certificates;
