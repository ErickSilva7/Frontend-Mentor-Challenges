import { styled } from 'styled-components';

const StyledCalculator = styled.div`
  height: auto;   
  width: 22.5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.calculatorBackgroundColor};
`;

export default StyledCalculator;
