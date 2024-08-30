import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export interface ItemProps {
  title: string;
  subtitle: string;
  description: string;
  timeRange: string;
  icon: React.ReactNode;
}

const backgroundColor = '#2D3748';
const textColor = '#E2E8F0';
const iconBgColor = '#4A5568';

const VerticalTimelineItem = ({
  title,
  subtitle,
  description,
  timeRange,
  icon,
}: ItemProps) => (
  <VerticalTimelineElement
    key={title}
    className="vertical-timeline-element--education"
    contentStyle={{ background: backgroundColor, color: textColor }}
    contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
    date={timeRange}
    iconStyle={{ background: iconBgColor, color: textColor }}
    icon={icon}
  >
    <h3 className="vertical-timeline-element-title">{title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
    <p>{description}</p>
  </VerticalTimelineElement>
);

export default VerticalTimelineItem;
