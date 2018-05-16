import * as React from 'react';
import styled from "styled-components";

import Container from '../components/Container';
import Navigation from '../components/Navigation';

import { widths, heights, colors } from '../styles/constants';

const StyledHeader = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  background-color: ${colors.white};
  height: ${heights.header}px;
  z-index: 98;
`
const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  padding: 10px 0;
`

const Logo = styled.img`
  padding-left: 10px;
  height: 100%;
`

const Brandname = styled.h4`
  align-self: center;
  margin: 0;
  padding: 0;
  padding-left: 1em;
  font-weight: 300;
  text-transform: uppercase;
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
      <Brand>
        <Logo src={logo.resolutions.src}/>
        <Brandname>Controlnet</Brandname>
      </Brand>
      <Navigation toggleLock={toggleLock} setLang={setLang} lang={lang} items={[]}/>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
