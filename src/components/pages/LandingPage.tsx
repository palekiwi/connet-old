import * as React from 'react';
import styled from "styled-components";
import { colors, heights } from '../../styles/constants';

import Container from '../Container';
import Img from 'gatsby-image';
import Card from '../Card';

const StyledLanding = styled.div`
  position: relative;
  height: calc(100vh - ${heights.header}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(120deg,
    hsla(230,5%,40%,0.9),
    hsla(200,5%,40%,1)
  );
`

const HeaderImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`

const Image = styled(Img)`
  height: calc(100vh - ${heights.header}px);
  & > img {
    object-fit: cover !important;
    object-position: 0% 100% !important;
  }
`

const Content = styled(Container)`
  width: 100%;
  flex-direction: column;
  padding: 0 1em;
`

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: white;
  margin-bottom: 2em;
`

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
  align-content: space-between;
`

const initialState = {};
type State = Readonly<typeof initialState>;

interface Props {
  headerOne: any
}

class LandingPage extends React.Component<Props, State> {
  state = initialState

  render () {
    return (
      <StyledLanding>
        <HeaderImg>
          <Image sizes={this.props.headerOne.sizes}/>
        </HeaderImg>
        <Content>
          <Heading>
            Heading
          </Heading>
          <Cards>
            {
              ['Microgrids', 'Power SCADA', 'Flood Control', 'Service D', 'Service E'].map((el, i) =>
              <Card key={i} title={el}/>
            )}
          </Cards>
        </Content>
      </StyledLanding>
    );
  }
}

export default LandingPage;
