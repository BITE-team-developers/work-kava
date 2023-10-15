import styled from '@emotion/styled';
import { Section } from 'components/App.styled';

export const FastfoodSection = styled(Section)`
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.primary};
  }
`;
