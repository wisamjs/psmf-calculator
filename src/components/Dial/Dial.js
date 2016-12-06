import React from 'react';
import { connect } from 'react-redux';
import './Dial.css';
import { updateXPos } from '../../utils/utils';
import Input from '../../components/Input';


function mapStateToProps({dial}) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Dial = ({primaryValue, primaryUnit, secondaryValue, secondaryUnit, onChange}) => {
  return (
    <div>
      <form
      name="calculator"
      className="lato center py2">
        <Input
        name="weight"
        type="number"
        pattern="[0-9]*"
        unit={primaryUnit}
        defaultValue={primaryValue}
        onChange={onChange}/>
          <p className="grey lato h6"> {secondaryValue} {secondaryUnit}</p>
      </form>

      <div className="dial"
      style={{
        backgroundPosition: ` 50% 50%`
      }}
      draggable="true">
      </div>
    </div>
    );

};

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Dial);
