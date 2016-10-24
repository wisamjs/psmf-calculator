import React, {PropTypes} from 'react';

const Input = () => {
  return (
    <input
    name="weight"
    className="h2 my2 px0 py1"
    type="number"
    pattern="[0-9]*"
    placeholder="150"/>
  );
}

Input.defaultName = 'Input';
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func
}

export default Input
