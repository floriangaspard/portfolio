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
            title="FSwap"
            description="Ethereum token swapping web application running on the sepolia ethereum testnet. 
            Allows the providing of liquidity in a pool of a token and ethereum and the swapping between these two. 
            Developed as a personal challenge and as a part of a learning process."
            tags={['React', 'TypeScript', 'Solidity', 'Hardhat']}
            imgLink=""
            link="https://fswap.floriangaspard.com"
          />
          <Project
            title="Portfolio"
            description="Personal website for showcasing my work."
            tags={['React', 'Typescript', 'TailwindCSS']}
            imgLink=""
            link="https://floriangaspard.com"
          />
          <Project
            title="Cryptocurrencies trading algorithms"
            description="Developed a personal app for backtesting algorithmic trading strategies and running them on exchanges. 
            Also developed a dashboard monitoring the different running strategies and their results."
            tags={['React', 'TypeScript', 'Python', 'Redis']}
            imgLink=""
            link=""
          />
        </div>
      </div>
    </section>
  );
};
