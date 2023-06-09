import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.calculatorBackgroundColor};
`;

export const StyledH2 = styled.h2`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};
`;

export const SwitchThemeButton = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 8px;
  width: 3rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.displayColor};
  cursor: pointer;
`;

export const Dot = styled.div`
  border-radius: 8px;
  margin: 0.1rem 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme }) => theme.equalAndDotColor};

  ${({ dotPosition }) => {
    if (dotPosition === 2) {
      return `
        grid-Column: 2/3;
      `;
    }
    if (dotPosition === 3) {
      return `
        grid-Column: 3/4;
      `;
    }
    return `
      grid-Column: 1/2;
    `;
  }}
`;
