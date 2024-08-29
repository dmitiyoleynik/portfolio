import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const data: CompanyProps[] = [
  {
    position: 'Frontend & Mobile dev',
    company: 'Darly Solutions',
    range: 'February 2022 - November 2022',
    description:
      'Cras luctus, mauris in laoreet eleifend, justo enim sodales felis, eget dignissim urna quam sit amet justo...',
  },
  {
    position: 'Frontend dev',
    company: 'Ardas',
    range: 'February 2022 - November 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ipsum risus, ut fermentum turpis efficitur ac...',
  },
  {
    position: 'Frontend dev',
    company: 'SoftServe',
    range: 'February 2022 - November 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra...',
  },
];

const educationData: EducationProps[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    range: 'September 2016 - June 2020',
    description:
      'Focused on software development, algorithms, and data structures...',
  },
  {
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    range: 'September 2020 - June 2022',
    description:
      'Specialized in machine learning, AI, and advanced algorithms...',
  },
];

interface CompanyProps {
  position: string;
  company: string;
  description: string;
  range: string;
}

interface EducationProps {
  degree: string;
  institution: string;
  description: string;
  range: string;
}

const Education = () => {
  return (
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
        Education
      </Heading>
      <VerticalTimeline>
        {educationData.map(({ degree, institution, description, range }) => (
          <VerticalTimelineElement
            key={institution}
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#2D3748', color: '#E2E8F0' }}
            contentArrowStyle={{ borderRight: '7px solid #2D3748' }}
            date={range}
            iconStyle={{ background: '#4A5568', color: '#E2E8F0' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">{degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {institution}
            </h4>
            <p>{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Flex>
  );
};

export default Education;
