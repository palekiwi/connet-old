import * as React from 'react';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition';
import { Item } from './Navigation';

interface Props {
  items: Array<Item>
  lang: string
  isOpen: boolean
}

const StyledMenu = styled.div`
  position: absolute;
  z-index: 97;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const defaultStyles = {
  transition: '0.3s ease-in opacity'
};

const transitionStyles: TransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, display: 'none'}
};

const Menu: React.SFC<Props> = ({ items, lang, isOpen }) => (
  <Transition in={isOpen} timeout={{enter: 0, exit: 300}}>
    {(state: string) => (
      <StyledMenu style={{...defaultStyles, ...transitionStyles[state]}}>
        {items.map((item, i) => <span key={i}>{item.label[lang]}</span>)}
      </StyledMenu>
    )}
  </Transition>
);

export default Menu;
