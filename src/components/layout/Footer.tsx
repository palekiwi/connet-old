import * as React from 'react';
import styled from "styled-components";

import { device } from '../../styles/constants';

import Container from '../Container';
import Link from '../Link';

interface Props {
  lang: Lang
  setLang: setLang
  pages: {
    en: any
    zh: any
  }
  solutions: {
    en: any
    zh: any
  }
}

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`

const FooterInner = styled(Container)`
  display: flex;
  padding: 1.5em;
  flex-direction: column;
  width: 100%;
`

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    flex-direction: row;
  }
`

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  flex-basis: 33%;
`

const Brand = styled.h4`
  text-transform: uppercase;
  color: ${props => props.theme.base};
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`

const LangSelect = styled.nav`
  display: flex;
  flex-direction: column;
`

const LangLink = styled(Link)`
  &, &:visited {
    color: ${props => props.theme.white};
  }
`


const NavLink = styled(Link)`
  &, &:visited {
    color: ${props => props.theme.white};
  }
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer: React.SFC<Props> = ({ lang, setLang, pages, solutions }) => (
  <StyledFooter>
    <FooterInner>

      <Brand>
        Controlnet International
      </Brand>

      <FooterBottom>
        <Pane>
          <Contact>
            <span>+886-7-8791-2889</span>
            <span>info@connet.com.tw</span>
            <span>Copyright 2018</span>
          </Contact>
        </Pane>

        <Pane>
          <Navigation>
            {pages[lang].map((el:any) =>
              <NavLink
                key={el.label}
                to={el.to}
                lang={lang}
              >
                {el.label}
              </NavLink>
            )}
          </Navigation>
        </Pane>

        <Pane>
          <LangSelect>
            <LangLink onClick={() => setLang('en')} lang={'en'} to={'/'}>English</LangLink>
            <LangLink onClick={() => setLang('zh')} lang={'zh'} to={'/'}>中文</LangLink>
          </LangSelect>
        </Pane>
      </FooterBottom>

    </FooterInner>
  </StyledFooter>
);

export default Footer;
