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
          time="Sept 2022 - Sept 2023"
          title="Full stack developer - Tiama"
          description="Worked on the Tiama Eco-System project with an international team, maintained the existing project as well as 
          designed and developed new features following a SCRUM organisation."
          tags={['React', 'TypeScript', 'C#', '.Net', 'Azure', 'MongoDB', 'InfluxDB']}
          link="https://www.tiama.com/"
        />
        <WorkExperience
          time="Feb 2022 - Sept 2023"
          title="Full stack developer - Amiltone"
          description="Designed and developed a cooking recipe sharing web application for 6 months before working for one of the companies' 
          client on another project."
          tags={['React', 'TypeScript', 'C#', '.Net', 'Flutter', 'SQL']}
          link="https://www.amiltone.com/"
        />
        <WorkExperience
          time="Jun 2021 - Oct 2021"
          title="Full stack developer and data scientist internship - VIF Systems"
          description="Designed and developed a dashboard for a vertical farm monitoring system, bringing farming statistics 
          to modern and performant web application. I also analysed this data using machine learning techniques."
          tags={['React', 'TypeScript', 'Python', 'R', 'Azure', 'SQL']}
          link="https://vif-systems.com/"
        />
      </div>
      <div className="flex bg-gray-100 p-5 mt-7 rounded-xl relative">
        <FontAwesomeIcon icon={faGraduationCap} className="text-4xl absolute left-5 -top-14" />
        <FontAwesomeIcon
          icon={faCaretUp}
          className="absolute left-8 -top-5 text-4xl text-gray-100 group-hover:text-black"
        />
        <div>
          <p className="font-bold mb-3 text-2xl">Oct 2021</p>
          <h3 className="mb-3 font-bold">Master's degree in computer science,</h3>
          <p className="">Université Claude Bernard Lyon 1 - Lyon, France</p>
        </div>
      </div>
    </section>
  );
};
