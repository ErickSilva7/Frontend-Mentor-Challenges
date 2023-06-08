import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.textColor};
`;

export const HeaderTitle = styled.h1`
  font-size: 1.25rem;
`;
