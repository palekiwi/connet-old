import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Section from './Section';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  color: ${props => props.theme.black};
  text-align: center;
`

const SubTitle = styled.h3`
  color: ${props => props.theme.black};
`

Title.defaultProps = {theme};
SubTitle.defaultProps = {theme};

const Text = styled.p`
  color: ${props => props.theme.black};
  text-align: center;
`

Text.defaultProps = {theme};

interface DivProps {
  className?: string
  reverse?: boolean
}

const Div: React.SFC<DivProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

const ImageSection = styled(Div)`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  }
`

const Pane = styled.div`
  flex-basis: 100%;
  @media ${device.tablet} {
    flex-basis: 50%;
  }
`

const TextPane = styled(Pane)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1.5rem 0;
`

const ImageTitle = styled(SubTitle)`
  text-align: center;
  text-transform: uppercase;
`
const ImageText = styled(Text)`
  text-align: center;
`

const Image = styled(Img)`
  width: 100%;
  overflow: hidden;
  max-height: 300px;
`

interface Props {
  size?: Size
  title?: string
  paragraphs?: Array<string>
  img?: any
  background?: string
  reverse?: boolean
}

const TitleImage: React.SFC<Props> = props => (
    <Section size={props.size} background={props.background}>
      <ImageSection reverse={props.reverse}>
        <Pane>
          <Image sizes={props.img.childImageSharp.sizes}/>
        </Pane>
        <TextPane>
          <ImageTitle>{props.title}</ImageTitle>
          <Paragraphs>
            {props.paragraphs.map((p,i) => <ImageText key={i}>{p}</ImageText>)}
          </Paragraphs>
        </TextPane>
      </ImageSection>
    </Section>
);

export default TitleImage;
