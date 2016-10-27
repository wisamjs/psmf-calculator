import React from 'react';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';

const LeanMass = () => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Lean Mass</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <Button path="weight"/>
    </div>
  );
}

export default LeanMass;
