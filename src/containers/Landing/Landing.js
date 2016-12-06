import React from 'react';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Scale from '../../components/Scale';

const Landing = () => {
  return (
    <div className="mx3 flex flex-column">
      <div>
        <Title>PSMF Calculator</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>
      <div className="mx3 my2">
        <Scale/>
      </div>

      <Button path="weight"/>
    </div>
  );
}

export default Landing;
