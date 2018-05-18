import * as React from 'react';

import GatsbyLink from 'gatsby-link';

interface Props {
  lang: Lang
  to: string
}

const Link: React.SFC<Props> = ({ lang, to, children }) => (
  <GatsbyLink to={`/${lang}${to}`}>{children}</GatsbyLink>
);

export default Link;
