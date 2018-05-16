import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

interface DivProps {
  className?: string
  background?: string
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);
const StyledSection = styled(Div)`
  width: 100%;
  background-color: ${props => props.background || props.theme.white}
`

const InnerSection = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10em;
`

const Title = styled.h1`
  color: ${props => props.theme.black};
  text-align: center;
`

Title.defaultProps = {theme};

const Text = styled.h3`
  color: ${props => props.theme.black};
  font-weight: 300;
  text-align: center;
  margin-bottom: 0;
`

Text.defaultProps = {theme};

interface Props {
  title?: string
  text?: string
  background?: string
}

const Hero: React.SFC<Props> = ({ title, text, background }) => (
  <StyledSection background={background}>
    <InnerSection>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </InnerSection>
  </StyledSection>
);

export default Hero;
