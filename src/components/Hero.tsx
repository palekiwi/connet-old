import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';

const StyledHero = styled.div`
  width: 100%;
`

const Image = styled(Img)`
  width: 100%;
  max-height: 400px;
  overflow: hidden;
`

interface Props {
  img: any
}

const Hero: React.SFC<Props> = ({ img }) => (
  <StyledHero>
    <Image sizes={img.sizes}/>
  </StyledHero>
);

export default Hero;
