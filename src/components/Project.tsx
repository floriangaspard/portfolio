import { Tag } from './Tag';

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imgLink: string;
};

export const Project = ({ title, description, tags, link, imgLink }: ProjectProps) => {
  return (
    <div className="group">
      <div className="mb-10 p-5 rounded-xl bg-gray-100 group-hover:cursor-pointer  group-hover:bg-black group-hover:text-white">
        <img className="bg-slate-500 w-full h-[300px] mb-3 rounded-xl"></img>
        <h3 className="mb-3 font-bold">{title}</h3>
        <p className="mb-3">{description}</p>
        <div className="flex flex-row gap-4">
          {tags.map((t) => (
            <Tag value={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
