import * as React from 'react';

import LandingPage from '../../components/LandingPage';

interface Props {
  lang: Lang
  data: {
    site: {
      siteMetadata: {
        title: string
        defLang: string
        solutions: {
          en: any
        }
      }
    },
    allFile: any
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <LandingPage
        images={this.props.data.allFile.edges}
        sections={this.props.data.site.siteMetadata.solutions.en}
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
        solutions {
          en {
            to
            label
            img
          }
        }
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
