import * as React from 'react';
import styled from "styled-components";

import GatsbyLink from 'gatsby-link';

interface Props {
  lang: Lang
  to: string
  className?: string
}

const Link: React.SFC<Props> = ({ className, lang, to, children }) => (
  <GatsbyLink className={className} to={`/${lang}${to}`}>{children}</GatsbyLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
`
export default StyledLink;
