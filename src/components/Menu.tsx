import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

type MenuProps = {
  refs: MutableRefObject<HTMLElement[]>;
};

export const Menu = ({ refs }: MenuProps) => {
  const [active, setActive] = useState(0);
  const observers = useRef<IntersectionObserver[]>([]);
  const [toggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!toggled);
  };

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    for (let i = 0; i < 3; i++) {
      if (observers.current) {
        observers.current[i] = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              setActive(i);
            }
          },
          { threshold: 0.6 }
        );
        obs[i] = observers.current[i];
      }

      if (refs.current[i]) observers.current[i].observe(refs.current[i]);
    }

    return () => {
      for (let i = 0; i < obs.length; i++) {
        obs[i].disconnect();
      }
    };
  }, [refs]);

  return (
    <div className="sticky top-0 z-10 lg:w-1/4">
      <button
        type="button"
        className="absolute top-0 items-center p-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none z-20"
        onClick={toggle}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={
          (toggled ? 'flex ' : 'hidden lg:flex ') +
          'absolute lg:sticky flex-col h-screen justify-center pl-7 top-0 w-80 md:w-1/2 lg:w-3/12 bg-white'
        }
      >
        <ul className="text-3xl">
          <li className={`p-3 ${active === 0 ? 'font-bold text-5xl' : ''}`}>
            <a href="#about" onClick={() => setActive(0)}>
              About
            </a>
          </li>
          <li className={`p-3 ${active === 1 ? 'font-bold text-5xl' : ''}`}>
            <a href="#experience" onClick={() => setActive(1)}>
              Experience
            </a>
          </li>
          <li className={`p-3 ${active === 2 ? 'font-bold text-5xl' : ''}`}>
            <a href="#projects" onClick={() => setActive(2)}>
              Projects
            </a>
          </li>
        </ul>
        <div className="flex gap-4 pl-7 mb-7 absolute bottom-0 left-0">
          <a href="https://github.com/floriangaspard" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
        </div>
      </div>
    </div>
  );
};
