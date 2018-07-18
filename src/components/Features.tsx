import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

interface Props {
  size?: Size
  background?: string
  features?: Array<any>
}

interface DivProps {
  className?: string
  reverse?: boolean
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

const Feature = styled(Div)`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  }
`
const Image = styled.div`
  width: 100%;
  overflow: hidden;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
  max-height: 300px;
`
const Text = styled.div`
  padding: 1.5em;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const Title = styled.h3`
  text-transform: uppercase;
`
const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
`
const P = styled.p`
`

const Features: React.SFC<Props> = props => (
  <section>
    <Container>
      {props.features.map((f, i) => 
        <Feature reverse={i % 2 == 0}>
          <Image>
            <Img sizes={f.img.childImageSharp.sizes}/>
          </Image>
          <Text>
            <Title>{f.title}</Title>
            <Paragraphs>
              {f.paragraphs.map((p:string,i:number) => <P>{p}</P>)}
            </Paragraphs>
          </Text>
        </Feature>
      )}
    </Container>
  </section>
);

export default Features;
