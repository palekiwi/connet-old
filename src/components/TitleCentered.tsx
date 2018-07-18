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

interface Props {
  title: string
  text: Array<string>
  img?: any
  background?: string
  size?: Size
}

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

const TitleCentered: React.SFC<Props> = props => (
  <Section size={props.size} background={props.background}>
    <Container>
      <CenteredSection>
        <Title>{props.title}</Title>
        <Paragraphs>
          {props.text.map((t, i) => <LeadText>{t}</LeadText>)}
        </Paragraphs>
      </CenteredSection>
    </Container>
  </Section>
);

export default TitleCentered;
