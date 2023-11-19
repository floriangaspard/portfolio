import { MutableRefObject } from 'react';
import { WorkExperience } from './WorkExperience';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

type ExperienceProps = {
  refs: MutableRefObject<HTMLElement[]>;
};

export const Experience = ({ refs }: ExperienceProps) => {
  return (
    <section
      ref={(el) => {
        if (el) refs.current[1] = el;
      }}
      id="experience"
      className="flex flex-col mb-14 pb-14 border-b-4 border-black relative"
    >
      <h2 className="text-4xl mb-10 font-bold">Experience</h2>
      <div className="relative before:bg-gray-300 before:w-[4px] before:absolute before:h-[98%] before:left-10 before:rounded-xl pl-24">
        <WorkExperience
          time="2222 - 2223"
          title="Full stack developer"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
          tags={['React', 'C#']}
          link=""
        />
        <WorkExperience
          time="2222 - 2223"
          title="Full stack developer"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
          tags={['React', 'C#']}
          link=""
        />
        <WorkExperience
          time="2222 - 2223"
          title="Full stack developer"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias
  exercitationem recusandae voluptas facilis laborum qui ab neque, odit unde porro eveniet
  in minus rem temporibus quis aut? Dolorem, eius."
          tags={['React', 'C#']}
          link=""
        />
      </div>
      <div className="flex bg-gray-100 p-5 mt-7 rounded-xl relative">
        <FontAwesomeIcon icon={faGraduationCap} className="text-4xl absolute left-5 -top-14" />
        <FontAwesomeIcon
          icon={faCaretUp}
          className="absolute left-8 -top-5 text-4xl text-gray-100 group-hover:text-black"
        />
        <div>
          <h3 className="mb-3 font-bold">Education</h3>
          <p className="">Master's degree in computer science</p>
        </div>
      </div>
    </section>
  );
};
