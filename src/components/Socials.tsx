import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Socials = () => {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/floriangaspard" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="text-3xl" />
      </a>
      <a href="mailto:floriangaspard.fg@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
      </a>
      <a href="https://instagram.com/florianfg_" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
      </a>
    </div>
  );
};
