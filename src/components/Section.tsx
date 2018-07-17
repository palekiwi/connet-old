import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

type Format = 'hero' | 'split' | 'image' | 'centered' | 'features';
type Size = 'small' | 'medium' | 'large';

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
  format?: Format
}

const El: React.SFC<SectionProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

const StyledSection = styled(El)`
  width: 100%;
  background-color: ${props => props.background || props.theme.white};
  padding: ${props => props.format == 'image' ? '0' : padding[props.size]};
`

const CenteredSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
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
  flex-basis: 30%;
  text-transform: uppercase;
`

const SplitText = styled(Text)`
  flex-basis: 70%;
  text-align: left;
`

const SplitImage = styled(Img)`
  width: 100%;
`

const HeroSection = styled.div`
`
const HeroImage = styled(Img)`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
`

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
  format: Format
  title?: string
  text?: Array<string>
  img?: any
  background?: string
  reverse?: boolean
  features?: Array<any>
}

const StyledCenteredSection: React.SFC<Props> = props => (
  <StyledSection size={props.size} background={props.background}>
    <Container>
      <CenteredSection>
        <Title>{props.title}</Title>
        <Paragraphs>
          {props.text.map((t:string,i:number) => <LeadText>{t}</LeadText>)}
        </Paragraphs>
      </CenteredSection>
    </Container>
  </StyledSection>
);

const StyledSplitSection: React.SFC<Props> = props => (
  <StyledSection size={props.size} background={props.background}>
    <Container>
      <SplitSection>
        <SplitParagraph>
          <SplitTitle>{props.title}</SplitTitle>
          <Paragraphs>
            {props.text.map((t:string,i:number) => <SplitText>{t}</SplitText>)}
          </Paragraphs>
        </SplitParagraph>
        {props.img && <SplitImage sizes={props.img.childImageSharp.sizes}/>}
      </SplitSection>
    </Container>
  </StyledSection>
);

const StyledImageSection: React.SFC<Props> = props => (
    <StyledSection format={props.format} size={props.size} background={props.background}>
      <ImageSection reverse={props.reverse}>
        <Pane>
          <Image sizes={props.img.childImageSharp.sizes}/>
        </Pane>
        <TextPane>
          <ImageTitle>{props.title}</ImageTitle>
          <Paragraphs>
            {props.text.map((t,i) => <ImageText key={i}>{t}</ImageText>)}
          </Paragraphs>
        </TextPane>
      </ImageSection>
    </StyledSection>
);

const StyledHeroSection: React.SFC<Props> = props => (
  <HeroSection>
    <HeroImage sizes={props.img.childImageSharp.sizes}/>
    <StyledCenteredSection {...props}/>
  </HeroSection>
);

const StyledFeaturesSection: React.SFC<Props> = props => (
  <div>
    {props.features.map((f, i) => 
      <Section
        key={i}
        format="image"
        reverse={i % 2 == 0}
        title={f.title}
        text={f.text}
        img={f.img}
      />
    )}
  </div>
);

const Section: React.SFC<Props> = (props) => {
  switch (props.format) {
    case 'centered':
      return <StyledCenteredSection {...props}/>

    case 'split':
      return <StyledSplitSection {...props}/>

    case 'image':
      return <StyledImageSection {...props}/>

    case 'features':
      return <StyledFeaturesSection {...props}/>

    case 'hero':
      return <StyledHeroSection {...props}/>
  }
};

Section.defaultProps = {size: 'small'};

export default Section;
