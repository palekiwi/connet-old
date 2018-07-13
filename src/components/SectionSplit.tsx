import * as React from 'react';
import styled from "styled-components";

import { widths, device } from '../styles/constants';
import Img from 'gatsby-image';
import Container from './Container';

interface DivProps {
  className?: string
  reverse?: boolean
  background?: string
}

const Div: React.SFC<DivProps> = (props) => (
  <Container className={props.className}>{props.children}</Container>
);

const StyledHero = styled(Div)`
  background-color: ${props => props.background || props.theme.white};
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: ${props => props.reverse ? 'row-reverse': 'row'};
  }
`

const Pane = styled.div`
  flex-basis: 100%;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
`

const Image = styled(Img)`
  width: 100%;
  overflow: hidden;
  max-height: 300px;
`

const Section = styled.div`
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
`
const Text = styled.p`
`

interface Props {
  img: any
  title: string
  text: string
  background?: string
  reverse?: boolean
}

const Hero: React.SFC<Props> = ({ title, text, img, reverse, background }) => (
  <StyledHero reverse={reverse} background={background}>
    <Pane>
      <Image sizes={img.sizes}/>
    </Pane>
    <Pane>
      <Section>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Section>
    </Pane>
  </StyledHero>
);

export default Hero;
