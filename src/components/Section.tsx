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

Title.defaultProps = {theme};

const Text = styled.h3`
  color: ${props => props.theme.black};
  font-weight: 300;
  text-align: center;
  margin-bottom: 0;
`

Text.defaultProps = {theme};

// SplitSection
const SplitSection = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`
const SplitTitle = styled.h2`
  flex-basis: 40%;
  @media ${device.tablet} {
    text-align: center;
  }
`
const SplitText = styled.p`
  flex-basis: 60%;
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
              {text && <Text>{text}</Text>}
            </CenteredSection>
          </Container>
        </StyledSection>
      )

    case 'split':
      return (
        <StyledSection size={size} background={background}>
          <Container>
            <SplitSection>
              {title && <SplitTitle>{title}</SplitTitle>}
              {text && <SplitText>{text}</SplitText>}
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
              {title && <Title>{title}</Title>}
              {text && <Text>{text}</Text>}
            </TextPane>
          </ImageSection>
        </StyledSection>
      )
  }
};

Section.defaultProps = {size: 'small'};

export default Section;
