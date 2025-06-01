import { Tag } from './Tag';

type ProjectProps = {
  title: string;
  description: string;
  time: string;
  tags: string[];
  link: string;
  imgLink: string;
};

export const Project = ({ title, description, time, tags, link, imgLink }: ProjectProps) => {
  return (
    <a href={link} target="_blank" className="group">
      <div className="mb-10 p-5 rounded-xl bg-gray-100 group-hover:cursor-pointer  group-hover:bg-black group-hover:text-white h-full">
        <img
          className="bg-slate-500 w-full max-h-[300px] mb-3 rounded-xl object-cover"
          src={imgLink}
        ></img>
        <p className="font-bold mb-3 text-2xl">{time}</p>
        <h3 className="mb-3 font-bold">{title}</h3>
        <p className="mb-3">{description}</p>
        <div className="flex flex-row flex-wrap gap-4">
          {tags.map((t) => (
            <Tag value={t} />
          ))}
        </div>
      </div>
    </a>
  );
};
