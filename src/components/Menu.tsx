import * as React from 'react';
import styled from "styled-components";
import { Item } from './Navigation';

interface Props {
  items: Array<Item>
  lang: string
  isOpen: boolean
}

interface DivProps {
  className?: string
  isOpen: boolean
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

const StyledMenu = styled(Div)`
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: lightgray;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in opacity;
`

const Menu: React.SFC<Props> = ({ items, lang, isOpen }) => (
  <StyledMenu isOpen={isOpen}>
    {items.map((item, i) => <span key={i}>{item.label[lang]}</span>)}
  </StyledMenu>
);

export default Menu;
