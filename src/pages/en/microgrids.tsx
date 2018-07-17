import * as React from 'react';

import SimplePage from '../../components/pages/SimplePage';

interface Props {
  lang: Lang
  data: {
    pagesYaml: any
  }
}

const MicrogridsPage: React.SFC<Props> = (props) => (
  <SimplePage {...props}/>
);

export default MicrogridsPage;

export const query = graphql`
  query MicrogridsQueryEN {
    pagesYaml (id: {regex: "/microgrids-en/"}) {
      sections {
        format
        title
        text
        img {
          childImageSharp {
            sizes(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        features {
          title
          text
          img {
            childImageSharp {
              sizes(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`;
