import * as React from 'react';
import styled from "styled-components";
import Link from '../components/Link';

import ContainerFluid from '../components/ContainerFluid';
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
const HeaderInner = styled(ContainerFluid)`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const Brand = styled(Link)`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.img`
  height: ${heights.header - 24}px;
  margin: 0 12px;
`

const Brandname = styled.h4`
  &, &:visited {
    color: ${colors.base};
    margin: 0;
    padding: 0;
    padding-left: 1em;
    font-weight: 300;
    text-transform: uppercase;
  }
`

interface Props {
  lang: Lang
  logo: any
  setLang: setLang
  toggleLock: (b: boolean) => void
}

const Header: React.SFC<Props> = ({setLang, lang, logo, toggleLock}) => (
  <StyledHeader>
    <HeaderInner>
      <Brand to={'/'} lang={lang}>
        <Logo src={logo.resolutions.src}/>
        <Brandname>Controlnet International</Brandname>
      </Brand>
      <Navigation toggleLock={toggleLock} setLang={setLang} lang={lang} items={[]}/>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
