import React, {PropTypes} from 'react';

const DEFAULT_CLASSES = "open-sans center grey";

const Description = ({children, className = DEFAULT_CLASSES}) => {
  return (
    <p className={className}>
      {children}
    </p>
  );
}

Description.defaultName = 'Description';
Description.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Description;
