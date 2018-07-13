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

interface DivProps {
  className?: string
  background?: string
  size?: Size
}

const El: React.SFC<DivProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

const StyledSection = styled(El)`
  width: 100%;
  background-color: ${props => props.background || props.theme.white};
  padding: ${props => padding[props.size]};
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

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10em;
`

interface Props {
  size?: Size
  format: Format
  title?: string
  text?: string
  img?: any
  background?: string
}

const Section: React.SFC<Props> = ({ size, format, img, title, text, background }) => {
  switch (format) {
    case 'centered':
      return (
        <StyledSection size={size} background={background}>
          <Container>
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
        <StyledSection background={background}>
          <ImageSection>
            <p>Image</p>
            {title && <Title>{title}</Title>}
            {text && <Text>{text}</Text>}
          </ImageSection>
        </StyledSection>
      )
  }
};

Section.defaultProps = {size: 'small'};

export default Section;
