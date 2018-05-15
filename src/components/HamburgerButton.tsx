import * as React from 'react';
import styled, {css} from "styled-components";
import { hamburger as a } from '../styles/keyframes';

interface Props {
  isOpen: boolean
  toggle: () => void
}

const Button = styled.div`
  cursor: pointer;
  z-index: 99;
`

const Lines = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 46px;
  height: 46px;
`
const LinesOpen = styled(Lines)`
  padding: 15px;
`
const LinesClose = styled(Lines)`
  transform: rotate(45deg);
`

interface LineProps {
  isOpen: boolean
  className?: string
}

const Div: React.SFC<LineProps> = (props) => (<div className={props.className}/>);

const Line = styled(Div)`
  position: absolute;
  width: 16px;
  height: 2px;
  position: relative;
  margin-top: 3px;
  background-color: #000;
  };
`
const LineOpen = styled(Line)`
  transform: scaleX(0) translateX(0);
  animation: ${a.openIn} 0.3s 0.5s 1 normal forwards ease-out;
`

const OpenEven = styled(LineOpen)`
  ${props => props.isOpen &&
    `animation: ${a.openOut2} 0.4s 0s 1 normal forwards linear;`}
`
const OpenOdd = styled(LineOpen)`
  ${props => props.isOpen &&
    `animation: ${a.openOut1} 0.4s 0s 1 normal forwards linear;`}
`

const CloseOne = styled(Line)`
  position: absolute;
  top: 15px;
  right: 22px;
  width: 2px;
  height: 16px;
  transform: scaleY(0);
  ${props => props.isOpen ?
    `animation: ${a.closeIn1} 0.3s 0.5s 1 normal forwards ease-in;` :
    `animation: ${a.closeOut1} 0.3s 0s 1 normal forwards linear;`
  }
`

const CloseTwo = styled(Line)`
  position: absolute;
  top: 22px;
  right: 15px;
  width: 16px;
  height: 2px;
  transform: scaleX(0);
  ${props => props.isOpen ?
    `animation: ${a.closeIn2} 0.3s 0.5s 1 normal forwards ease-in;` :
    `animation: ${a.closeOut2} 0.3s 0s 1 normal forwards linear;`
  }
`

const Hamburger: React.SFC<Props> = ({isOpen, toggle}) => (
  <Button onClick={() => toggle()}>
    <LinesOpen>
      <OpenEven isOpen={isOpen}/>
      <OpenOdd isOpen={isOpen}/>
      <OpenEven isOpen={isOpen}/>
    </LinesOpen>
    <LinesClose>
      <CloseOne isOpen={isOpen}/>
      <CloseTwo isOpen={isOpen}/>
    </LinesClose>
  </Button>
);

export default Hamburger;
