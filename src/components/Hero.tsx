import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import TitleCentered from './TitleCentered';

import { widths, device } from '../styles/constants';

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

const HeroSection = styled.div`
`
const HeroImage = styled(Img)`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
`

interface Props {
  size?: Size
  title: string
  text: Array<string>
  img?: any
  background?: string
}

const Hero: React.SFC<Props> = props => (
  <HeroSection>
    <HeroImage sizes={props.img.childImageSharp.sizes}/>
    <TitleCentered {...props}/>
  </HeroSection>
);

export default Hero;
