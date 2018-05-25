import * as React from 'react';
import styled from "styled-components";
import { colors, heights } from '../../styles/constants';

import Container from '../Container';
import Img from 'gatsby-image';
import Tile from './Tile';

const StyledLanding = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled(Container)`
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
  align-content: space-between;
`

const Heading = styled.h1`
  text-align: center;
  text-transform: uppercase;
  margin: 2em auto;
`

const Tiles = styled.div`
  background: linear-gradient(120deg,
    hsla(230,5%,40%,0.9),
    hsla(200,5%,40%,1)
  );
`

const initialState = {};
type State = Readonly<typeof initialState>;

class LandingPage extends React.Component<LandingPageProps, State> {
  state = initialState

  render () {
    return (
      <StyledLanding>

        <Content>
          <Heading>
            Controlnet International
          </Heading>
        </Content>

        <Tiles>
          <Content>
            { this.props.sections.map((el, i) =>
              <Tile
                key={i}
                title={el.title}
                basis={100 / this.props.sections.length + '%'}
              />
            )}
          </Content>
        </Tiles>

      </StyledLanding>
    );
  }
}

export default LandingPage;
