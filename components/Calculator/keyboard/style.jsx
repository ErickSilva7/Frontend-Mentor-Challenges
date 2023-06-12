import { styled } from "styled-components";

export const StyledKeyboard = styled.div`
  width: 18.5rem;
  height: 27.125rem;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${({ theme }) => theme.keyboardBackgroundColor};
`;

export const StyledKey = styled.button`
  width: 2.875rem;
  height: 2.875rem;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;

  ${({ theme, id }) => {
    let backgroundColor = theme.numberAndOperationColor;
    let boxShadow = theme.numberAndOperationBoxShadow;
    let color = theme.numberAndOperationFontColor;
    let fontWeight = 600;

    if (id === "del") {
      backgroundColor = theme.delAndResetColor;
      boxShadow = theme.delAndResetBoxShadow;
      color = theme.delResetAndEqualFontColor;
      fontWeight = 400;
    } else if (id === "reset") {
      backgroundColor = theme.delAndResetColor;
      boxShadow = theme.delAndResetBoxShadow;
      color = theme.delResetAndEqualFontColor;
      fontWeight = 400;
    } else if (id === "equal") {
      backgroundColor = theme.equalAndDotColor;
      boxShadow = theme.equalBoxShadow;
      color = theme.delResetAndEqualFontColor;
    }

    return `
      background-color: ${backgroundColor};
      box-shadow: 0 5px 0 ${boxShadow};
      color: ${color};
      font-weight: ${fontWeight};
    `;
  }};

  &:active {
    position: relative;
    top: 5px;
    box-shadow: none;
  }
`;
