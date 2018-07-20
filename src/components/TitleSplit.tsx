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

const LeadText = styled.h3`
  color: ${props => props.theme.black};
  font-weight: 300;
  text-align: center;
`
const Text = styled.p`
  color: ${props => props.theme.black};
  text-align: center;
`

LeadText.defaultProps = {theme};
Text.defaultProps = {theme};

// SplitSection
const SplitSection = styled.div`
  display: block;
`

const SplitParagraph = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`

const SplitTitle = styled(SubTitle)`
  flex-basis: 40%;
  text-transform: uppercase;
`

const SplitText = styled(Text)`
  flex-basis: 60%;
  text-align: left;
`

const SplitImage = styled(Img)`
  width: 100%;
`

interface Props {
  size?: Size
  title?: string
  paragraphs?: Array<string>
  img?: any
  background?: string
  reverse?: boolean
  features?: Array<any>
}

const TitleSplit: React.SFC<Props> = props => (
  <Section size={props.size} background={props.background}>
    <Container>
      <SplitSection>
        <SplitParagraph>
          <SplitTitle>{props.title}</SplitTitle>
          <Paragraphs>
            {props.paragraphs.map((p,i) => <SplitText key={i}>{p}</SplitText>)}
          </Paragraphs>
        </SplitParagraph>
        {props.img && <SplitImage sizes={props.img.childImageSharp.sizes}/>}
      </SplitSection>
    </Container>
  </Section>
);

export default TitleSplit;
