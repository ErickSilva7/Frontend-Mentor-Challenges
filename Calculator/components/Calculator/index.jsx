import React from 'react';
import StyledCalculator from './style';
import Header from './header';
import Display from './display';
import Keyboard from './keyboard';

function Calculator() {
  return (
    <StyledCalculator>
      <Header />
      <Display />
      <Keyboard />
    </StyledCalculator>
  );
}

export default Calculator;
