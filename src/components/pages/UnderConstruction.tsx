import * as React from 'react';
import styled from "styled-components";

interface Props {
  lang: Lang
}

const Content = styled.div`
  padding: 5em;
  text-align: center;
`
const Image = styled.img`
  width: 200px;
`

const Title = styled.h1`
  text-transform: uppercase;
`

const SubTitle = styled.h3`
  font-weight: 300;
`

const UnderConstruction: React.SFC<Props> = ({ lang }) => (
  <Content>
    <Image src={require('../../data/img/ctn-logo.jpg')}/>
    <Title>Available soon.</Title>
    <SubTitle>This page is still under construction</SubTitle>
  </Content>
);

export default UnderConstruction;
