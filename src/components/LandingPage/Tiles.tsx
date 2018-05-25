import * as React from 'react';
import styled from "styled-components";
import { device, colors, heights } from '../../styles/constants';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Container from '../Container';
import Img from 'gatsby-image';

const tileBorder = `1px solid rgba(0,0,0,0.3)`;
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

const Logo = styled.div`
  padding: 0.2em;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: ${color};
`

const Title = styled.h3`
  color: ${color};
  padding-top: 1em;
  padding-bottom: 0.5em;
  margin: 0 auto;
`

const Subtitle = styled.h5`
  margin: 0 auto;
  font-weight: 300;
  transition: all 0.3s ease-in;
  opacity: 0;
  align-self: flex-end;
`

interface DivProps {
  basis: string
  className?: string
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);


const StyledTile = styled(Div)`
  cursor: pointer;
  min-height: 400px;
  position: relative;
  padding: 1.2em 1em;
  border-top: ${tileBorder};
  color: rgba(255,255,255,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    ${Subtitle} {
      opacity: 1;
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
    justify-content: space-between;
    flex-basis: ${props => props.basis};
    border-right: ${tileBorder};
    border-top: none;
    }
    &:last-child {
      border-right: none;
    }
  }
`

const Tile: React.SFC<Tile> = ({ title, basis, subtitle, img }) => (
  <StyledTile basis={basis}>
    <ImageWrapper><Image sizes={img.sizes}/></ImageWrapper>
    <Title>{title}</Title>
    <Subtitle>
      {subtitle}
    </Subtitle>
  </StyledTile>
);

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
  max-width: 1600px;
  flex-direction: column;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
  align-content: space-between;
  border-top: ${tileBorder};
  border-bottom: ${tileBorder};
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

        <Content>
          <Heading>
            System Engineering Solutions
          </Heading>
        </Content>

        <Tiles>
          { this.props.sections.map((el, i) =>
            <Tile
              key={i}
              title={el.title}
              subtitle={el.subtitle}
              basis={100 / this.props.sections.length + '%'}
              path={el.path}
              img={this.props.headerOne}
            />
          )}
        </Tiles>

      </StyledLanding>
    );
  }
}

export default LandingPage;
