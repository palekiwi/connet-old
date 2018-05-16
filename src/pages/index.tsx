import * as React from 'react';
import { navigateTo } from 'gatsby-link';

import Hero from '../components/Hero';
import SectionCentered from '../components/SectionCentered';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    }
    heroImg: any
  }
}

class IndexPage extends React.Component<Props, {}> {
  componentDidUpdate () {
    const { lang, data } = this.props;
    lang !== data.site.siteMetadata.defLang && navigateTo(`/${lang}/`);
  }
  render () {
    return (
      <div>
        <Hero img={this.props.data.heroImg}/>
        <SectionCentered title="Heading" text="Some descriptive text."/>
        <SectionCentered background={'lightgray'} text="Some descriptive text."/>
      </div>
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
    heroImg: imageSharp(id: {regex: "/solar-panels/"}) {
      sizes(maxWidth: 1200, grayscale: true) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
