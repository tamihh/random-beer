import styled from 'styled-components';

interface TypographyProps {
  color?: string;
  fs?: number;
}

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ theme, fs }) => (fs ? `${fs}px` : theme.fontSize.l)};
  color: ${({ theme, color }) => (color ? color : theme.text.color)};
`;
