import React, {PropTypes} from 'react';

const DEFAULT_CLASSES = 'lato center';

const Title = ({children, className = DEFAULT_CLASSES}) => {
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}

Title.defaultName = 'Title';
Title.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Title;
