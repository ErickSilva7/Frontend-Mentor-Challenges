import React, { useContext } from "react";
import keys from "./key list.json";
import { StyledKey, StyledKeyboard } from "./style";
import { CalculatorContext } from "../../../context/CalculatorContext";

function Keyboard() {
  const { keyClick } = useContext(CalculatorContext);

  return (
    <StyledKeyboard>
      {keys.map(({ id, keyType, key }) => (
        <StyledKey type="button" id={keyType} key={id} onClick={keyClick}>
          {key}
        </StyledKey>
      ))}
    </StyledKeyboard>
  );
}

export default Keyboard;
