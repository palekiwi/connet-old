import * as React from 'react';
import { device } from '../../styles/constants';
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  margin-bottom: 0;
  padding: 1em;
  text-align: center;
`

interface DivProps {
  basis: string
  className?: string
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

const StyledTile = styled(Div)`
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  min-height: 300px;
  &:nth-child(last) {
    margin-left: 0;
  }
  overflow: hidden;
  flex-direction: column;
  transition: .3s ease-in;
  &:hover {
    background: rgba(255,255,255,0.1);
    ${Title} {
    }
  }
  @media ${device.tablet} {
    flex-basis: 50%;
  }
  @media ${device.desktop} {
    flex-basis: ${props => props.basis};
  }
`

const Tile: React.SFC<Tile> = ({ title, basis }) => (
  <StyledTile basis={basis}>
    <Title>{title}</Title>
  </StyledTile>
);

export default Tile;
