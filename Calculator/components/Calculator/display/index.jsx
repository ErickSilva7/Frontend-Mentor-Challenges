import React from 'react';
import { Num, OldNumAndOperator, StyledDisplay } from './style';

function Display() {
  return (
    <StyledDisplay>
      <OldNumAndOperator>
        <div>1</div>
        <div>+</div>
      </OldNumAndOperator>
      <Num>3</Num>
    </StyledDisplay>
  );
}

export default Display;
