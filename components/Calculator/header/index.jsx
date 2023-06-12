import React, { useContext, useEffect, useState } from "react";
import {
  Dot,
  HeaderTitle,
  StyledH2,
  StyledHeader,
  SwitchThemeButton,
  ThemeSwitch,
} from "./style";
import { ThemeContext } from "../../../context/ThemeContext";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);

  const [dotPosition, setDotPosition] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const localStorageTheme = parseFloat(localStorage.getItem("theme"));
      toggleTheme(localStorageTheme);
      if (localStorageTheme === 3) {
        setDotPosition(1);
      } else {
        setDotPosition(localStorageTheme + 1);
      }
    }
  });

  const SwitchDotPosition = () => {
    setDotPosition(dotPosition + 1);
    localStorage.setItem("theme", dotPosition);
    if (dotPosition === 3) {
      setDotPosition(1);
    }
    toggleTheme(dotPosition);
  };

  return (
    <StyledHeader>
      <HeaderTitle>Calculator</HeaderTitle>
      <ThemeSwitch>
        <StyledH2>Theme</StyledH2>
        <SwitchThemeButton type="button" onClick={SwitchDotPosition}>
          <Dot dotPosition={dotPosition} />
        </SwitchThemeButton>
      </ThemeSwitch>
    </StyledHeader>
  );
}

export default Header;
