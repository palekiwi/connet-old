import * as React from 'react';
import styled from "styled-components";
import { device, colors, heights } from '../../styles/constants';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'

import ContainerFluid from '../ContainerFluid';
import Img from 'gatsby-image';
import Link from '../../components/Link';

const tileBorder = `1px solid rgba(255,255,255,0.1)`;
const color = 'white';

const ImageWrapper = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Image = styled(Img)`
  width: 100%;
  height: 500px;
  & > img {
    object-fit: cover !important;
    object-position: 0% 100% !important;
  }
`

const Title = styled.h3`
  color: ${color};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const StyledTile = styled(Link)`
  cursor: pointer;
  height: calc(25vh - 16px);
  @media ${device.tablet} {
    height: calc(50vh - 32px);
  }
  position: relative;
  border-top: ${tileBorder};
  color: rgba(255,255,255,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;
  &:first-child {
    border-top: none;
  }
  overflow: hidden;
  transition: .2s ease-in-out;
  &:hover {
    background: rgba(0,0,0,0.6);
    color: rgba(255,255,255,1);
  }
  @media ${device.tablet} {
    flex-basis: 50%;
    &:nth-child(odd) {
      border-right: ${tileBorder};
    }
    &:nth-child(2) {
      border-top: none;
    }
  }
`

const Tile: React.SFC<Tile> = ({ lang, to, label, img }) => (
  <StyledTile to={to} lang={lang}>
    <ImageWrapper><Image sizes={img.sizes}/></ImageWrapper>
    <Title>{label}</Title>
  </StyledTile>
);

const StyledLanding = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Tiles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  background: linear-gradient(120deg,
    hsla(230,5%,40%,0.3),
    hsla(200,5%,40%,0.8)
  );
`

const initialState = {};
type State = Readonly<typeof initialState>;

class LandingPage extends React.Component<LandingPageProps, State> {
  state = initialState

  render () {
    return (
      <StyledLanding>

        <ContainerFluid>
          <Tiles>
            { this.props.sections.map((el, i) =>
              <Tile
                key={i}
                label={el.label}
                to={el.to}
                img={el.img.childImageSharp}
                lang={this.props.lang}
              />
            )}
          </Tiles>
        </ContainerFluid>

      </StyledLanding>
    );
  }
}

export default LandingPage;
