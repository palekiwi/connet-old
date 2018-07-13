import * as React from 'react';

import Img from 'gatsby-image';
import styled from "styled-components";

import Section from '../../components/Section';

interface Props {
  lang: Lang
  data: {
    header: any
    featureOne: any
    featureTwo: any
    featureThree: any
  }
}

const HeaderImg = styled(Img)`
  max-height: 150px;
`

class IndexPage extends React.Component<Props, {}> {
  render () {
    const data = this.props.data;
    return (
      <div>
        <HeaderImg sizes={data.header.sizes}/>
        <Section
          format={'centered'}
          title={'Microgrids'}
          text={'Information about microgrids, maybe long text'}
        />
        <Section
          format={'image'}
          img={data.featureOne}
          title={'Feature One'}
          text={'Description of feature one'}
        />
        <Section
          format={'image'}
          img={data.featureTwo}
          title={'Feature Two'}
          text={'Description of feature one'}
        />
        <Section
          format={'image'}
          img={data.featureThree}
          title={'Feature Three'}
          text={'Description of feature one'}
        />
      </div>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query MicrogridsQueryEN {
    header: imageSharp(id: {regex: "/microgrids/"}) {
      sizes(maxWidth: 1200, grayscale: true, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    featureOne: imageSharp(id: {regex: "/scada/"}) {
      sizes(maxWidth: 1200, grayscale: true, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    featureTwo: imageSharp(id: {regex: "/flood-control/"}) {
      sizes(maxWidth: 1200, grayscale: true, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
    featureThree: imageSharp(id: {regex: "/energy-management/"}) {
      sizes(maxWidth: 1200, grayscale: true, quality: 100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
