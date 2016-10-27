import React from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Landing = () => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>PSMF Calculator</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <Button path="leanMass"/>
    </div>
  );
}

export default Landing;
