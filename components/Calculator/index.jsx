import React from "react";
import StyledCalculator from "./style";
import Header from "./header";
import Display from "./display";
import Keyboard from "./keyboard";
import { CalculatorProvider } from "../../context/CalculatorContext";

function Calculator() {
  return (
    <StyledCalculator>
      <Header />
      <CalculatorProvider>
        <Display />
        <Keyboard />
      </CalculatorProvider>
    </StyledCalculator>
  );
}

export default Calculator;
