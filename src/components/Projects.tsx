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
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          <Project
            title="FSwap"
            description="Ethereum decentralized exchange running on the sepolia ethereum testnet. 
            Allows the providing of liquidity in a pool and the swapping between the tokens. 
            Developed as a personal challenge and as part of a learning process."
            tags={['React', 'TypeScript', 'Solidity', 'Hardhat']}
            imgLink="/fswap.png"
            link="https://fswap.floriangaspard.com"
          />
          <Project
            title="Marxet"
            description="NFT marketplace on the stacks ecosystem."
            tags={['React', 'TypeScript', 'Clarity', 'Stacks', 'Shadcn-ui']}
            imgLink="/marxet.png"
            link="https://marxet.floriangaspard.com"
          />
          <Project
            title="Portfolio"
            description="Personal website for showcasing my work."
            tags={['React', 'Typescript', 'TailwindCSS']}
            imgLink="/portfolio.png"
            link="https://floriangaspard.com"
          />
          <Project
            title="Cryptocurrencies trading algorithms"
            description="Developed a personal app for backtesting algorithmic trading strategies and running them on exchanges. 
            Also developed a dashboard monitoring the different running strategies and their results."
            tags={['React', 'TypeScript', 'Python', 'Redis']}
            imgLink="crypto.jpeg"
            link=""
          />
        </div>
      </div>
    </section>
  );
};
