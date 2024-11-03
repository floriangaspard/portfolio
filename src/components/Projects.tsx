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
            title="DeFi Platform"
            description="Development of a decentralized exchange platform on Ethereum enabling token swaps and liquidity pool management via smart contracts."
            tags={[
              'React',
              'TypeScript',
              'TailwindCSS',
              'Solidity',
              'Hardhat',
              'Ethers',
              'Ethereum',
              'Git',
              'Visual Studio Code',
            ]}
            imgLink="/fswap.png"
            link="https://fswap.floriangaspard.com"
          />
          <Project
            title="NFT Marketplace"
            description="Creation of an NFT marketplace on Stacks blockchain including management smart contract and sales user interface."
            tags={[
              'React',
              'TypeScript',
              'Shadcn-ui',
              'Clarity',
              'Stacks',
              'Git',
              'Visual Studio Code',
            ]}
            imgLink="/marxet.png"
            link="https://marxet.floriangaspard.com"
          />
          <Project
            title="Portfolio"
            description="Creation of a modern portfolio showcasing my projects and skills."
            tags={['React', 'Typescript', 'TailwindCSS', 'Shadcn-ui', 'Git', 'Visual Studio Code']}
            imgLink="/portfolio.png"
            link="https://floriangaspard.com"
          />
          <Project
            title="Algorithmic trading platform"
            description="Development of a complete algorithmic trading solution including backtesting, automated execution, and real-time performance monitoring."
            tags={['Python', 'Flask', 'React', 'TypeScript', 'Redis', 'Git', 'Visual Studio Code']}
            imgLink="crypto.jpeg"
            link=""
          />
        </div>
      </div>
    </section>
  );
};
