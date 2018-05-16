import * as React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  color: #ccc;
  min-height: 100px;
`
interface Props {
  lang: Lang
}

const Footer: React.SFC<Props> = ({ lang }) => (
  <StyledFooter>
    Footer in {lang}
  </StyledFooter>
);

export default Footer;
