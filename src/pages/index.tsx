import * as React from 'react';
import { navigateTo } from 'gatsby-link';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  componentDidUpdate () {
    const { lang, data } = this.props;
    lang !== data.site.siteMetadata.defLang && navigateTo(`/${lang}/`);
  }
  render () {
    return <div>{this.props.lang}</div>;
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        defLang
      }
    }
  }
`;
