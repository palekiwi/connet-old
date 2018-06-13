import * as React from 'react';
import { navigateTo } from 'gatsby-link';

import LandingPage from '../../components/LandingPage';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
      }
    },
    allFile: any
  }
}

const sections: Array<Tile> = [
  {title: 'Microgrid', subtitle: 'Service description with two sentences', path: '/microgrid', img: 'microgrid'},
  {title: 'Power Scada', subtitle: 'Service description with two sentences of different length by some words', path: '/', img: 'scada'},
  {title: 'Flood Control', subtitle: 'Service description with two sentences', path: '/', img: 'flood-control'},
  {title: 'Energy Saving', subtitle: 'Service description with two sentences of different length by some words', path: '/', img: 'energy'},
  {title: 'Automation', subtitle: 'Service description with two sentences of different length by some words', path: '/', img: 'automation'},
  {title: 'Other Projects', subtitle: 'Service description with two sentences of different length by some words', path: '/', img: 'solar'},
]

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <LandingPage
        images={this.props.data.allFile.edges}
        sections={sections}
        lang={'en'}
      />
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQueryEN {
    site {
      siteMetadata {
        defLang
      }
    }
    allFile (filter: {id: {regex: "/header/"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 1200, grayscale: true) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
