import React, {PropTypes} from 'react';

const DEFAULT_CLASSES = "h2 my2 px0 py1";

const Input = ({name, className = DEFAULT_CLASSES, type, defaultValue, pattern, placeholder, unit, onChange}) => {
  return (
    <div>
      <input
      name={name}
      className={className}
      type={type}
      pattern={pattern}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}/>
      <span className="lato grey h3">{unit}</span>
    </div>
  );
}

Input.defaultName = 'Input';
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  unit: PropTypes.string,
  onChange: PropTypes.func
}

export default Input;
