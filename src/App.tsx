import { useRef } from 'react';
import './App.css';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { Projects } from './components/Projects';

function App() {
  const refs = useRef<HTMLElement[]>([]);

  return (
    <div className="lg:flex lg:flex-row">
      <Menu refs={refs} />
      <div className="flex flex-col text-xl py-16 px-10 lg:w-8/12">
        <About refs={refs} />
        <Experience refs={refs} />
        <Projects refs={refs} />
      </div>
    </div>
  );
}

export default App;
