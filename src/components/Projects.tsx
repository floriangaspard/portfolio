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
      className="mb-14 pb-14 border-b-4 border-b-gray-800"
    >
      <h2 className="text-4xl mb-10 font-bold text-gray-800">Projects</h2>
      <div className="">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          <Project
            time="2024 - present"
            title="noo2.news"
            description="A decentralized news platform built on the NOSTR protocol that analyzes trends with LLM models, featuring a modern, responsive interface and real-time updates."
            tags={[
              'C#',
              '.NET',
              'MongoDB',
              'React',
              'TypeScript',
              'TailwindCSS',
              'Git',
              'Visual Studio Code',
            ]}
            imgLink="/noo2.png"
            link="https://noo2.news"
          />
          <Project
            time="2025 - present"
            title="The Mirror"
            description="Built a minimalist self-reflection app using AI, featuring secure user auth, subscription management, and a simple landing page."
            tags={[
              'C#',
              '.NET',
              'SQL Server',
              'React Native',
              'React',
              'Typescript',
              'TailwindCSS',
              'Git',
              'Visual Studio Code',
            ]}
            imgLink="/the-mirror.png"
            link="https://getthemirror.app"
          />
          <Project
            time="2024"
            title="Portfolio"
            description="A responsive personal portfolio website with optimized performance and seamless navigation to showcase my professional experience and technical projects."
            tags={['React', 'Typescript', 'TailwindCSS', 'Shadcn-ui', 'Git', 'Visual Studio Code']}
            imgLink="/portfolio.png"
            link="https://floriangaspard.com"
          />
        </div>
      </div>
    </section>
  );
};
