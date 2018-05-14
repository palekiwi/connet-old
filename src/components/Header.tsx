import * as React from 'react';
import Img from 'gatsby-image';
import styled from "styled-components";

import { colors } from '../styles/constants';

const StyledHeader = styled.div`
  background-color: ${colors.base};
  height: 60px;
  border-bottom: 3px solid ${colors.accent}
`

const initialState = {menu: false};
type State = Readonly<typeof initialState>;

interface Props {
  lang: string
  logo: any
}

class Header extends React.Component<Props, State> {
  state = initialState

  render () {
    return (
      <StyledHeader>
        <img src={this.props.logo.resolutions.src} style={{height: '100%'}}/>
      </StyledHeader>
    );
  }
}

export default Header;
