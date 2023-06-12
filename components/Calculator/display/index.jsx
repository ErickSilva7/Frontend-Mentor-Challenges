import React, { useContext } from "react";
import { Num, OldNumAndOperator, StyledDisplay } from "./style";
import { CalculatorContext } from "../../../context/CalculatorContext";

function Display() {
  const { num, oldNum, operator } = useContext(CalculatorContext);

  return (
    <StyledDisplay>
      <OldNumAndOperator>
        <div>{oldNum}</div>
        <div>{operator}</div>
      </OldNumAndOperator>
      <Num>{num}</Num>
    </StyledDisplay>
  );
}

export default Display;
