import * as React from 'react';

import SimplePage from '../../components/pages/SimplePage';

interface Props {
  lang: Lang
  data: {
    pagesYaml: any
  }
}


const ScadaPage: React.SFC<Props> = (props) => (
  <SimplePage {...props}/>
);

export default ScadaPage;

export const query = graphql`
  query ScadaQueryEN {
    pagesYaml (id: {regex: "/scada-en/"}) {
      sections {
        format
        title
        paragraphs
        img {
          childImageSharp {
            sizes(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        features {
          title
          paragraphs
          img {
            childImageSharp {
              sizes(maxWidth: 600, grayscale: true, quality: 100) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;
