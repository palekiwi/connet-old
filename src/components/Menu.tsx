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
  pages: any
  solutions: any
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
  margin: 0;
  margin-bottom: 14px;
`

const Links = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  min-width: 30%;
  padding: 4px 0;
`
const Pages = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Solutions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`

const NavLink = styled(Link)`
  width: 100%;
  text-align: center;
  margin: 4px 0;
  &, &:visited {
    color: black;
  }
  font-weight: 300;
  text-transform: uppercase;
`

const LangSettings = styled.div`
  display: flex;
  flex-flow: row no-wrap;
`
const LangToggle = styled(Link)`
  margin: 20px;
  &, &:visited {
    color: gray;
  }
  text-transform: uppercase;
  font-size: 0.8em;
`

const Menu: React.SFC<Props> = ({ pages, solutions, lang, isOpen, setLang, toggle, logo }) => (
  <Fade duration={{enter: 0, exit: 300}} inProp={isOpen}>
    <StyledMenu>
      <Link onClick={() => toggle()} to={'/'} lang={lang}>
        <Logo src={logo.resolutions.src}/>
      </Link>

      <Links>
        <Pages>
          {pages[lang].map((el:any) =>
            <NavLink key={el.label}
              onClick={() => toggle()}
              lang={lang}
              to={el.to}
            >
              {el.label}
            </NavLink>
          )}
        </Pages>

        <Solutions>
          {solutions[lang].map((el:any) =>
            <NavLink key={el.label}
              onClick={() => toggle()}
              lang={lang}
              to={el.to}
            >
              {el.label}
            </NavLink>
          )}
        </Solutions>
      </Links>

      <LangSettings>
        <LangToggle
          onClick={() => {setLang('en')}}
          lang={'en'}
          to={'/'}>
          English
        </LangToggle>
        <LangToggle
          onClick={() => {setLang('zh')}}
          lang={'zh'}
          to={'/'}>
          中文
        </LangToggle>
      </LangSettings>

    </StyledMenu>
  </Fade>
);

export default Menu;
