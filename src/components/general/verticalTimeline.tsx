import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export interface ItemProps {
  title: string;
  subtitle: string;
  description: string;
  timeRange: string;
  icon: React.ReactNode;
}
//TODO: rename late
const grayColor = '#2D3748';
const whiteColor = '#E2E8F0';
const iconBackground = '#4A5568';

const VerticalTimeLineItem = ({
  title,
  subtitle,
  description,
  timeRange,
  icon,
}: ItemProps) => (
  <VerticalTimelineElement
    key={title}
    className="vertical-timeline-element--education"
    contentStyle={{ background: grayColor, color: whiteColor }}
    contentArrowStyle={{ borderRight: `7px solid ${grayColor}` }}
    date={timeRange}
    iconStyle={{ background: iconBackground, color: whiteColor }}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

export default VerticalTimeLineItem;
