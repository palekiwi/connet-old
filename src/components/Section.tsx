import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

const padding = {
  small: '3rem 1.5rem',
  medium: '9rem 1.5rem',
  large: '18rem 1.5rem'
};

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

interface SectionProps {
  className?: string
  background?: string
  size?: Size
}

const El: React.SFC<SectionProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

const StyledSection = styled(El)`
  width: 100%;
  background-color: ${props => props.background || props.theme.white};
  padding: ${props => padding[props.size]};
`

const Section: React.SFC<SectionProps> = (props) => (
  <StyledSection {...props}>{props.children}</StyledSection>
);

Section.defaultProps = {size: 'small'};

export default Section;
