import React from 'react';
import keys from './key list.json';
import { StyledKey, StyledKeyboard } from './style';

function Keyboard() {
  return (
    <StyledKeyboard>
      {keys.map(({ id, keyType, key }) => (
        <StyledKey
          type="button"
          keyType={keyType}
          key={id}
        >
          {key}
        </StyledKey>
      ))}
    </StyledKeyboard>
  );
}

export default Keyboard;
