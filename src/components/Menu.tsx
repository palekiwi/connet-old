import * as React from 'react';
import styled from "styled-components";
import Transition from 'react-transition-group/Transition';
import Fade from './transitions/Fade';
import { Item } from './Navigation';
import { colors } from '../styles/constants';

interface Props {
  items: Array<Item>
  lang: string
  isOpen: boolean
  setLang: setLang
}

const StyledMenu = styled.div`
  position: absolute;
  z-index: 97;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Menu: React.SFC<Props> = ({ items, lang, isOpen, setLang }) => (
  <Fade duration={{enter: 0, exit: 300}} inProp={isOpen}>
    <StyledMenu>
      {items.map((item, i) => <span key={i}>{item.label[lang]}</span>)}
      <div>
        <button onClick={() => setLang('en')}>English</button>
        <button onClick={() => setLang('zh')}>Chinese</button>
      </div>
    </StyledMenu>
  </Fade>
);

export default Menu;
