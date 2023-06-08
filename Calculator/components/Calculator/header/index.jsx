import React from 'react';
import { HeaderTitle, StyledHeader } from './style';

function Header() {
  return (
    <StyledHeader>
      <HeaderTitle>Calculator</HeaderTitle>
      <div>
        <h2>Theme</h2>
      </div>
    </StyledHeader>
  );
}

export default Header;
