import * as React from 'react';
import styled from "styled-components";

import GatsbyLink from 'gatsby-link';

interface Props {
  lang: Lang
  to: string
  className?: string
  onClick?: () => void
}

const Link: React.SFC<Props> = ({ className, lang, to, children, onClick }) => (
  <GatsbyLink className={className} onClick={onClick}to={`/${lang}${to}`}>{children}</GatsbyLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
`
export default StyledLink;
