import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Socials } from './Socials';

type MenuProps = {
  refs: MutableRefObject<HTMLElement[]>;
};

export const Menu = ({ refs }: MenuProps) => {
  const [active, setActive] = useState(0);
  const [toggled, setToggled] = useState(false);

  const observers = useRef<IntersectionObserver[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
          { threshold: 0.5 }
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

  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(target as Node)
      ) {
        if (toggled) {
          setToggled(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, toggled]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="absolute top-0 items-center p-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none z-20"
        onClick={() => setToggled(!toggled)}
      >
        <FontAwesomeIcon icon={toggled ? faClose : faBars} className="text-2xl" />
      </button>
      <div className="lg:hidden absolute top-4 right-6">
        <Socials />
      </div>
      <div className="sticky top-0 z-10 lg:w-3/12 lg:h-screen">
        <div
          className={
            'absolute lg:relative w-screen h-screen lg:w-3/12' +
            (toggled ? ' bg-gray-800 bg-opacity-30' : '')
          }
        >
          <div
            ref={menuRef}
            className={
              (toggled ? 'opacity-100 z-2000 ' : 'opacity-0 lg:opacity-100 ') +
              'absolute flex flex-col h-screen justify-center pl-7 top-0 w-80 md:w-1/2 lg:w-3/12 bg-white transition-opacity ease-in-out duration-300'
            }
          >
            <ul className="text-3xl text-gray-800">
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
            <div className="pl-7 mb-7 absolute bottom-0 left-0">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
