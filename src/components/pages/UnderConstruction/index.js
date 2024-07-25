import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h3>Page is currently not available.</h3>
      <h3>We are working on solution.</h3>
      <h2>Thank you for understanding.</h2>
    </div>
  );
};

export default UnderConstruction;
