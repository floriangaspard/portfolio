import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tag } from './Tag';
import { faCaretLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

type WorkExperienceProps = {
  time: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const WorkExperience = ({ time, title, description, tags, link }: WorkExperienceProps) => {
  return (
    <a href={link} target="_blank" className="flex group mb-14">
      <div className="relative">
        <Card>
          <FontAwesomeIcon
            icon={faCaretLeft}
            className="absolute -left-4 text-4xl text-gray-100 group-hover:text-gray-800"
          />
          <FontAwesomeIcon
            icon={faCircle}
            className="absolute -left-[72px] text-4xl group-hover:text-gray-800"
          />
          <p className="font-bold mb-3 text-2xl">{time}</p>
          <h3 className="mb-3 font-bold">{title}</h3>
          <p className="mb-4">{description}</p>
          <div className="flex flex-row flex-wrap gap-4">
            {tags.map((t) => (
              <Tag value={t} />
            ))}
          </div>
        </Card>
      </div>
    </a>
  );
};
