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
          text={`The Independent Hybrid Power System has been designed
          by Controlnet to provide a dependable long-term energy
          suppy that can drive a remote island to economic growth.
          It is an integrated system of sustainable generation and
          power management technologies which deliver two
          types of energy, electrical and thermal, with the following
          characteristics:`}
        />
        <Section
          format={'image'}
          img={data.featureOne}
          title={'Feature One'}
          text={'Description of feature one'}
        />
        <Section
          reverse
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
        <Section
          format={'split'}
          title={'Microgrids'}
          text={`The Independent Hybrid Power System has been designed
          by Controlnet to provide a dependable long-term energy
          suppy that can drive a remote island to economic growth.
          It is an integrated system of sustainable generation and
          power management technologies which deliver two
          types of energy, electrical and thermal, with the following
          characteristics:`}
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
