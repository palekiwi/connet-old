import * as React from 'react';
import styled from "styled-components";

import Img from 'gatsby-image';
import Container from '../components/Container';

import { widths, device } from '../styles/constants';

const theme: Theme = {
  base: 'black',
  accent: 'dark-gray',
  white: 'white',
  black: 'black',
}

interface Props {
  size?: Size
  background?: string
  features?: Array<any>
}

const Features: React.SFC<Props> = props => (
  <div>
    {props.features.map((f, i) => 
      <p>{f.title}</p>
    )}
  </div>
);

export default Features;
