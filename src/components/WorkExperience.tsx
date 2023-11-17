import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tag } from './Tag';
import { faCaretLeft, faCircle } from '@fortawesome/free-solid-svg-icons';

type WorkExperienceProps = {
  time: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const WorkExperience = ({ time, title, description, tags, link }: WorkExperienceProps) => {
  return (
    <a href={link} target="_blank" className="flex group bg-gray-100 rounded-xl mb-10  ">
      <div className="p-5 rounded-xl relative group-hover:cursor-pointer group-hover:bg-black group-hover:text-white">
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="absolute -left-3 text-4xl text-gray-100 group-hover:text-black"
        />
        <FontAwesomeIcon
          icon={faCircle}
          className="absolute -left-[72px] text-4xl group-hover:text-black"
        />
        <p className="font-bold mb-3 text-2xl">{time}</p>
        <h3 className="mb-3 font-bold">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-row gap-4">
          {tags.map((t) => (
            <Tag value={t} />
          ))}
        </div>
      </div>
    </a>
  );
};
