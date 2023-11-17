import { MutableRefObject } from 'react';
import { Project } from './Project';

type ProjectsProps = {
  refs: MutableRefObject<HTMLElement[]>;
};

export const Projects = ({ refs }: ProjectsProps) => {
  return (
    <section
      ref={(el) => {
        if (el) refs.current[2] = el;
      }}
      id="projects"
      className="mb-14 pb-14 border-b-4 border-b-black"
    >
      <h2 className="text-4xl mb-10 font-bold">Projects</h2>
      <div className="">
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <Project
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
            tags={['React', 'C#']}
            imgLink=""
            link=""
          />
          <Project
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
            tags={['React', 'C#']}
            imgLink=""
            link=""
          />
          <Project
            title="Project 1"
            description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
            tags={['React', 'C#']}
            imgLink=""
            link=""
          />
        </div>
      </div>
    </section>
  );
};
