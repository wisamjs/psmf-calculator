import React, {PropTypes} from 'react';

const DEFAULT_CLASSES = "h2 my2 px0 py1";

const Input = ({name, className = DEFAULT_CLASSES, type, pattern, placeholder, onChange}) => {
  return (
    <input
    name={name}
    className={className}
    type={type}
    pattern={pattern}
    placeholder={placeholder}
    onChange={onChange}/>
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

export default Input;
