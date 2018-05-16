import * as React from 'react';
import styled from "styled-components";

import Container from '../components/Container';
import Navigation from '../components/Navigation';

import { widths, heights, colors } from '../styles/constants';

const StyledHeader = styled.div`
  background-color: ${colors.white};
  padding: 10px 0;
  height: ${heights.header}px;
  z-index: 98;
`
const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
`
const Logo = styled.img`
  height: 100%;
  padding-left: 10px;
`

interface Props {
  lang: string
  logo: any
  setLang: setLang
  toggleLock: (b: boolean) => void
}

const Header: React.SFC<Props> = ({setLang, lang, logo, toggleLock}) => (
  <StyledHeader>
    <HeaderInner>
      <Logo src={logo.resolutions.src}/>
      <Navigation toggleLock={toggleLock} setLang={setLang} lang={lang} items={[]}/>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
