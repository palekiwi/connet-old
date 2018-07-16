import * as React from 'react';

import SimplePage from '../../components/SimplePage';

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
        text
        img {
          childImageSharp {
            sizes(maxWidth: 600, grayscale: true, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        features {
          title
          text
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
