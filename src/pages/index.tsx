import { repeat } from 'ramda';

import * as React from 'react';
import { navigateTo } from 'gatsby-link';

import LandingPage from '../components/LandingPage';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    }
    headerOne: any
  }
}

const sections: Array<Tile> = repeat({title: 'Title'}, 4);

class IndexPage extends React.Component<Props, {}> {
  componentDidUpdate () {
    const { lang, data } = this.props;
    lang !== data.site.siteMetadata.defLang && navigateTo(`/${lang}/`);
  }
  render () {
    const data = this.props.data;
    return (
      <LandingPage headerOne={data.headerOne} sections={sections}/>
    );
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
    headerOne: imageSharp(id: {regex: "/solar-panels/"}) {
      sizes(maxWidth: 1200, grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
