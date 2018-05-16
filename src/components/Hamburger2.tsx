import * as React from 'react';
import styled from "styled-components";

interface Props {
  isOpen: boolean
  toggle: () => void
}

const Button = styled.div`
  cursor: pointer;
  display: block;
  height: 46px;
  position: relative;
  width: 46px;
  z-index: 99;
`

interface SpanProps {
  isOpen: boolean
  className?: string
  theme?: Theme
}

const Span: React.SFC<SpanProps> = (props) => <span className={props.className}/>;

const Line = styled(Span)`
  background-color: ${props => props.theme.base};
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 0.3s;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-in;
  width: 16px;
  &:nth-child(1) {
    top: calc(50% - 6px);
  }
  &:nth-child(2) {
    top: calc(50% - 1px);
  }
  &:nth-child(3) {
    top: calc(50% + 4px);
  }
  ${props => props.isOpen &&
    `&:nth-child(1) {
      transform: translateY(5px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: translateY(-5px) rotate(-45deg);
    }`
  }
`
const theme: Theme = {
  base: 'orange',
};

Line.defaultProps = { theme };

const Hamburger: React.SFC<Props> = ({ toggle, isOpen }) => (
  <Button onClick={() => toggle()}>
    <Line isOpen={isOpen}/>
    <Line isOpen={isOpen}/>
    <Line isOpen={isOpen}/>
  </Button>
);

export default Hamburger;
