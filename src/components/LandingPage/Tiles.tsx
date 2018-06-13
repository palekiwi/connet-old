import * as React from 'react';
import styled from "styled-components";
import { device, colors, heights } from '../../styles/constants';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'

import ContainerFluid from '../ContainerFluid';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

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

const Subtitle = styled.h5`
  margin: 0 auto;
  font-weight: 300;
  transition: all 0.3s ease-in;
  opacity: 0;
  align-self: flex-end;
`

const StyledTile = styled(Link)`
  cursor: pointer;
  height: calc(50vh - 32px);
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
  flex-direction: column;
  transition: .2s ease-in-out;
  &:hover {
    background: rgba(0,0,0,0.6);
    color: rgba(255,255,255,1);
    ${Title} {
    }
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
  @media ${device.desktop} {
    flex-basis: ${100/3}%;
    border-right: ${tileBorder};
    border-top: none;
    border-top: ${tileBorder};
    }
    &:last-child, &:nth-child(3) {
      border-right: none;
    }
    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      border-bottom: none;
    }
  }
`

const Tile: React.SFC<Tile> = ({ path, title, subtitle, img }) => (
  <StyledTile to={path}>
    <ImageWrapper><Image sizes={img.sizes}/></ImageWrapper>
    <Title>{title}</Title>
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
                title={el.title}
                subtitle={el.subtitle}
                path={this.props.lang + el.path}
                img={this.props.images.find((e:any) => e.node.relativePath.indexOf(el.img) > -1).node.childImageSharp}
              />
            )}
          </Tiles>
        </ContainerFluid>

      </StyledLanding>
    );
  }
}

export default LandingPage;
