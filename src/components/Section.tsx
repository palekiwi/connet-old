import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

type Format = 'split' | 'image' | 'centered';
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
  text?: string
  img?: any
  background?: string
  reverse?: boolean
}

const Section: React.SFC<Props> = ({ reverse, size, format, img, title, text, background }) => {
  switch (format) {
    case 'centered':
      return (
        <StyledSection size={size} background={background}> <Container>
            <CenteredSection>
              {title && <Title>{title}</Title>}
              {text && <LeadText>{text}</LeadText>}
            </CenteredSection>
          </Container>
        </StyledSection>
      )

    case 'split':
      return (
        <StyledSection size={size} background={background}>
          <Container>
            <SplitSection>
              {(title && text) &&
                <SplitParagraph>
                  <SplitTitle>{title}</SplitTitle>
                  <SplitText>{text}</SplitText>
                </SplitParagraph>
              }
              {img && <SplitImage sizes={img.sizes}/>}
            </SplitSection>
          </Container>
        </StyledSection>
      )

    case 'image':
      return (
        <StyledSection format={format} size={size} background={background}>
          <ImageSection reverse={reverse}>
            <Pane>
              <Image sizes={img.sizes}/>
            </Pane>
            <TextPane>
              {title && <ImageTitle>{title}</ImageTitle>}
              {text && <ImageText>{text}</ImageText>}
            </TextPane>
          </ImageSection>
        </StyledSection>
      )
  }
};

Section.defaultProps = {size: 'small'};

export default Section;
