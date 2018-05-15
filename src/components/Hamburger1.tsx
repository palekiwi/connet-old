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
  animate: boolean
}

const Div: React.SFC<LineProps> = (props) => (<div className={props.className}/>);

const Line = styled(Div)`
  position: absolute;
  width: 16px;
  height: 2px;
  position: relative;
  margin-top: 3px;
  background-color: #000;
  ${props => !props.animate &&
    `animation-duration: 0s !important;`
  }
`
const LineOpen = styled(Line)`
  transform: scaleX(0) translateX(0);
`

const OpenTwo = styled(LineOpen)`
  ${props => props.isOpen ?
    `animation: ${a.openOut2} 0.4s 0s 1 normal forwards linear;`:
    `animation: ${a.openIn} 0.3s 0.5s 1 normal forwards ease-out;`
  }
`
const OpenOne = styled(LineOpen)`
  ${props => props.isOpen ?
    `animation: ${a.openOut1} 0.4s 0s 1 normal forwards linear;`:
    `animation: ${a.openIn} 0.3s 0.5s 1 normal forwards ease-out;`
  }
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

class Hamburger extends React.Component<Props, {}> {
  state = {animate: false}

  componentDidMount () {
    setTimeout(() => this.setState({animate: true}), 500);
  }

  render () {
    const {toggle, isOpen} = this.props;
    const { animate } = this.state;
    return(
      <Button onClick={() => toggle()}>
        <LinesOpen>
          <OpenTwo animate={animate} isOpen={isOpen}/>
          <OpenOne animate={animate} isOpen={isOpen}/>
          <OpenTwo animate={animate} isOpen={isOpen}/>
        </LinesOpen>
        <LinesClose>
          <CloseOne animate={animate} isOpen={isOpen}/>
          <CloseTwo animate={animate} isOpen={isOpen}/>
        </LinesClose>
      </Button>
    );
  }
}

export default Hamburger;
