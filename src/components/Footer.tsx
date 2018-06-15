import * as React from 'react';
import styled from "styled-components";

import Container from './Container';
import Link from './Link';

interface Props {
  lang: Lang
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
  background-color: #333;
  color: #ccc;
  min-height: 100px;
`

const FooterInner = styled(Container)`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Brand = styled.div`
  text-transform: uppercase;
  margin-bottom: 20px;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

const NavLink = styled(Link)`
  &, &:visited {
    color: rgba(255,255,255,0.4);
  }
`

const Contact = styled.div`
  display: flex;
  width: 60%;
  flex-direction: row;
  justify-content: space-around;
`

const Footer: React.SFC<Props> = ({ lang, pages, solutions }) => (
  <StyledFooter>
    <FooterInner>
      <Brand>
        Controlnet International
      </Brand>
      <Contact>
        <p>+886-7-8791-2889</p>
        <p>info@connet.com.tw</p>
        <p>Copyright 2018</p>
      </Contact>
      <Navigation>
        {pages[lang].concat(solutions[lang]).map((el:any) =>
          <NavLink
            key={el.label}
            to={el.to}
            lang={lang}
          >
            {el.label}
          </NavLink>
        )}
      </Navigation>

    </FooterInner>
  </StyledFooter>
);

export default Footer;
