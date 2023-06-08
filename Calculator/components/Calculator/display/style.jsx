import { styled } from 'styled-components';

export const StyledDisplay = styled.div`
  display: grid;
  justify-items: end;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  font-family: $main-font;
  padding: 0.35rem 6%;
  border-radius: 10px;
  height: 6rem;
  overflow-x: scroll;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.displayColor};
  color: ${({ theme }) => theme.textColor};
`;

export const OldNumAndOperator = styled.div` 
  grid-row: 1/2;
  display: flex;
  gap: 0.5rem;
`;

export const Num = styled.div`
  font-size: 3rem;
  grid-row: 2/3;
  line-height: 3rem;
  font-weight: 600;
`;
