import { Box } from '@chakra-ui/react';
import { FaBriefcase } from 'react-icons/fa';
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
      'Cras luctus, mauris in laoreet eleifend, justo enim sodales felis, eget dignissim urna quam sit amet justo. Suspendisse molestie enim eget ante commodo sagittis. Cras id molestie mi. Nullam vehicula nec ipsum eu faucibus. Mauris convallis, velit non vehicula tristique, nisl libero bibendum magna, ut vehicula sem odio ut risus. Duis eu urna cursus, cursus est eget, egestas urna. Duis interdum dui quis posuere ultricies. Mauris est ligula, malesuada et eros nec, eleifend malesuada metus. Nulla vestibulum est magna, id lacinia massa mollis id. Suspendisse sit amet ligula aliquam, malesuada eros id, viverra dui. Sed venenatis leo vitae purus dictum consequat. Cras neque justo, ullamcorper quis blandit et, venenatis feugiat nisl. Maecenas cursus, risus nec malesuada hendrerit, dolor metus porta lacus, vel cursus risus ante vitae nisi. Suspendisse blandit nunc at nisi malesuada vestibulum. Nulla ut diam tempor, viverra nibh sed, fringilla augue.',
  },
  {
    position: 'Frontend dev',
    company: 'Ardas',
    range: 'February 2022 - November 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ipsum risus, ut fermentum turpis efficitur ac. Ut et dictum sem. Integer quis scelerisque est, non mollis tortor. Nullam sed mollis justo, eget commodo enim. Phasellus risus leo, aliquet at tempus at, eleifend in enim. Vivamus in bibendum quam. Maecenas efficitur mi nec lacus congue, ac posuere elit malesuada. Cras risus risus, ullamcorper ac lectus vitae, tempor pharetra libero. Praesent vitae faucibus justo. In tempor molestie nibh, sit amet ullamcorper mi ultricies vel.',
  },
  {
    position: 'Frontend dev',
    company: 'SoftServe',
    range: 'February 2022 - November 2022',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc enim dolor, dictum non volutpat ultrices, pellentesque eu magna. Quisque consequat diam non tempor molestie. Pellentesque id risus leo. Maecenas dictum erat eleifend urna ultrices pharetra. In mi ligula, rutrum in turpis sed, sollicitudin auctor lectus. Vestibulum ac purus elit.',
  },
];

interface CompanyProps {
  position: string;
  company: string;
  description: string;
  range: string;
}

const Experience = () => {
  return (
    <Box bgColor={'gray.800'} py={10}>
      <VerticalTimeline>
        {data.map(({ position, company, description, range }) => (
          <VerticalTimelineElement
            key={company}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#2D3748', color: '#E2E8F0' }}
            contentArrowStyle={{ borderRight: '7px solid #2D3748' }}
            date={range}
            iconStyle={{ background: '#4A5568', color: '#E2E8F0' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">{position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
            <p>{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Experience;
