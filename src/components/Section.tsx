import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

type Format = 'split' | 'image' | 'centered';

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

const El: React.SFC<DivProps> = (props) => (
  <section className={props.className}>{props.children}</section>
);

const StyledSection = styled(El)`
  width: 100%;
  background-color: ${props => props.background || props.theme.white}
`

const CenteredSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10em;
`

const SplitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10em;
`

const ImageSection = styled.div`
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
  format: Format
  title?: string
  text?: string
  img?: any
  background?: string
}

const Section: React.SFC<Props> = ({ format, img, title, text, background }) => {
  switch (format) {
    case 'centered':
      return (
        <StyledSection background={background}>
          <Container>
            <CenteredSection>
              <p>Centered</p>
              {title && <Title>{title}</Title>}
              {text && <Text>{text}</Text>}
            </CenteredSection>
          </Container>
        </StyledSection>
      )

    case 'split':
      return (
        <StyledSection background={background}>
          <SplitSection>
            <p>Split</p>
            {title && <Title>{title}</Title>}
            {text && <Text>{text}</Text>}
          </SplitSection>
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

export default Section;
