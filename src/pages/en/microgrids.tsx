import * as React from 'react';

import Img from 'gatsby-image';
import styled from "styled-components";

import Section from '../../components/Section';
import Features from '../../components/Features';

interface Props {
  lang: Lang
  data: {
    pagesYaml: any
  }
}

const HeaderImg = styled(Img)`
  max-height: 150px;
`

class IndexPage extends React.Component<Props, {}> {
  render () {
    const p = this.props.data.pagesYaml;
    console.log(p);
    return (
      <div>
        <HeaderImg sizes={p.headerImg.childImageSharp.sizes}/>
        <Section
          format={'centered'}
          title={p.title}
          text={p.text}
        />
        <Features
          features={p.features}
        />
        <Section
          format={'split'}
          title={p.architecture.title}
          text={p.architecture.text}
          img={p.architecture.img.childImageSharp}
        />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query MicrogridsQueryEN {
    pagesYaml (id: {regex: "/microgrids/"}) {
      headerImg {
        childImageSharp {
          sizes(maxWidth: 600, grayscale: true, quality: 100) {
            ...GatsbyImageSharpSizes
          }
        }
      }
      title
      text
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
      architecture {
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
`;
