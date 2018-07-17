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
    }
    pagesYaml: {
      solutions: {
        zh: any
      }
    }
  }
}

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <LandingPage
        sections={this.props.data.pagesYaml.solutions.zh}
        lang={'zh'}
      />
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQueryZH {
    site {
      siteMetadata {
        defLang
      }
    }
    pagesYaml(id: {regex: "/navigation/"}) {
      solutions {
        zh {
          to
          label
          img {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;
