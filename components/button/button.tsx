import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: 0;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: ${({ theme }) => theme.fontSize.xxs}px;

  &:hover {
    opacity: 0.8;
  }
`;
