import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';

function mapStateToProps({calculator}) {
  return {
    bodyfat: calculator.bodyfat,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };

}

const Bodyfat = ({bodyfat}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>What is your Bodyfat percentage?</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <div className="mb4">
        <form
        name="calculator"
        className="lato center py2">
            <Input
            name="weight"
            type="number"
            pattern="[0-9]*"
            unit='%'
            defaultValue={bodyfat}
            />
        </form>
      </div>

      <Button/>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Bodyfat);
