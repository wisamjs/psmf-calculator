import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const DEFAULT_CLASSES = 'uppercase my3 px3 py2 h6 bg-blue white w100';

const Button = ({children, path, className = DEFAULT_CLASSES}) => {

  return (
    <Link to={path}>
      <button className={className}>
        {children ? children : 'Continue'}
      </button>
    </Link>
  );
}

Button.defaultName = 'Button';
Button.propTypes = {
  children: PropTypes.node
}

export default Button;
