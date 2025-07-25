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
      className="flex flex-col mb-14 pb-14 border-b-4 border-gray-800 relative"
    >
      <h2 className="text-4xl mb-10 font-bold text-gray-800">Experience</h2>
      <div className="relative before:bg-gray-300 before:w-[4px] before:absolute before:h-[98%] before:left-10 before:rounded-xl pl-24">
        <WorkExperience
          time="Sept 2022 - Sept 2023"
          title="Full stack developer - Tiama"
          description="In an international context, development and maintenance of an industrial platform, including creation of real-time data visualizations, equipment integration, and deployment of solutions to remote sites, applying DevOps best practices."
          tags={[
            'C#',
            '.Net',
            'React',
            'TypeScript',
            'Azure',
            'MongoDB',
            'InfluxDB',
            'RabbitMQ',
            'SignalR',
            'Visual Studio',
          ]}
          link="https://www.tiama.com/"
        />
        <WorkExperience
          time="Feb 2022 - Sept 2023"
          title="Full stack developer - Amiltone"
          description="Design and development of a recipe sharing web application (architecture, RESTful API, frontend), before joining the TIAMA team for industrial platform development.
"
          tags={[
            'C#',
            '.Net',
            'React',
            'Javascript',
            'Next.js',
            'SQL Server',
            'Gitlab',
            'Visual Studio',
          ]}
          link="https://www.amiltone.com/"
        />
        <WorkExperience
          time="Jun 2021 - Oct 2021"
          title="Full stack developer and data scientist internship - VIF Systems"
          description="Complete design of an agricultural monitoring solution including database, integration API, and interactive dashboard with geographical visualizations and real-time graphs, complemented by LED systems optimization analysis using machine learning."
          tags={['C#', '.Net', 'React', 'Javascript', 'R', 'Azure', 'SQLite', 'Visual Studio Code']}
          link="https://vif-systems.com/"
        />
      </div>
      <div className="flex bg-gradient-to-br from-gray-50 via-slate-50 to-stone-50 backdrop-blur-sm border border-gray-200/60 shadow-xl shadow-gray-800/5 rounded-2xl mt-6 relative text-gray-800 leading-relaxed p-7">
        <FontAwesomeIcon icon={faGraduationCap} className="text-4xl absolute left-5 -top-14" />
        <FontAwesomeIcon
          icon={faCaretUp}
          className="absolute left-8 -top-5 text-4xl text-gray-100 group-hover:text-gray-800"
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
