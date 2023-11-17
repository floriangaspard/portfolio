import { MutableRefObject } from 'react';
import { Tag } from './Tag';

type AboutProps = {
  refs: MutableRefObject<HTMLElement[]>;
};

export const About = ({ refs }: AboutProps) => {
  return (
    <section
      ref={(el) => {
        if (el) refs.current[0] = el;
      }}
      id="about"
      className="flex flex-col lg:h-screen justify-center mb-14"
    >
      <div className="flex-row border-b-4 border-b-black gap-3 lg:gap-16 lg:p-7 items-baseline grid grid-cols-1 md:grid-cols-2">
        <div className="mb-12 lg:mb-32 ">
          <div>
            <h1 className="text-7xl font-bold mb-5">FLORIAN GASPARD</h1>
            <h2 className="text-5xl mb-10">Full stack developer</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Tag value="React" />
            <Tag value="Typescript" />
            <Tag value="C#" />
            <Tag value=".Net" />
            <Tag value="Python" />
            <Tag value="Solidity" />
          </div>
        </div>
        <p className="bg-gray-100 p-5 rounded-xl mb-14">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
          exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
          in minus rem temporibus quis aut? Dolorem, eius.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Consequuntur, alias exercitationem recusandae voluptas facilis laborum
          qui ab neque, odit unde porro eveniet in minus rem temporibus quis aut? Dolorem, eius.
        </p>
      </div>
    </section>
  );
};
