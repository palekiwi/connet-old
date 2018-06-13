import * as React from 'react';
import styled from "styled-components";

import Transition from 'react-transition-group/Transition';
import Fade from './transitions/Fade';
import Link from './Link';

import { colors } from '../styles/constants';

interface Props {
  items: Array<Item>
  lang: Lang
  isOpen: boolean
  setLang: setLang
  toggle: () => void
  logo: any
}

const StyledMenu = styled.div`
  position: absolute;
  z-index: 97;
  top: 0;
  left: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  width: 100px;
  margin: 0 0 20px 0;
`

const NavLink = styled(Link)`
`

const Menu: React.SFC<Props> = ({ items, lang, isOpen, setLang, toggle, logo }) => (
  <Fade duration={{enter: 0, exit: 300}} inProp={isOpen}>
    <StyledMenu>
      <Logo src={logo.resolutions.src}/>
      {items.map((item, i) =>
        <NavLink key={i}
          onClick={() => toggle()}
          lang={lang}
          to={item.to}>{item.label[lang]}
        </NavLink>
      )}
    </StyledMenu>
  </Fade>
);

export default Menu;
