import { MutableRefObject } from 'react';
import { Tag } from './Tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';
import { Card } from './Card';

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
      <div className="flex-row border-b-4 border-b-gray-800 gap-3 lg:gap-16 lg:p-7 items-baseline grid grid-cols-1 md:grid-cols-2">
        <div className="mb-12 lg:mb-32 ">
          <div className="text-gray-800">
            <h1 className="text-7xl font-bold mb-5">FLORIAN GASPARD</h1>
            <h2 className="text-5xl mb-10">Full stack developer</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Tag value="C#" />
            <Tag value=".Net" />
            <Tag value="React" />
            <Tag value="Javascript" />
            <Tag value="TypeScript" />
            <Tag value="SQL/NoSQL" />
            <Tag value="Azure" />
          </div>
        </div>
        <div className="mb-14">
          <Card>
            <p className="mb-7 text-gray-800 leading-relaxed">
              I bring my front-end and back-end knowledge to build the most <b>exceptional</b> web
              applications. <br />
              <br /> I like to write <b>performant</b>, <b>structured</b> and <b>well tested</b>{' '}
              code to deliver the highest quality products.
            </p>
            <a
              href="https://drive.google.com/file/d/1a7g0IT96-juoc1xLhYHhT1b1UXArekYV/view?usp=drive_link"
              target="_blank"
              className="bg-gray-800 text-white px-5 py-2 rounded-xl"
            >
              <FontAwesomeIcon icon={faLink} className="mr-3" />
              Resume
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};
