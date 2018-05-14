import * as React from 'react';
import styled from "styled-components";
import './HamburgerButton.css';

interface Props {
  isOpen: boolean
  toggle: () => void
}

const Hamburger: React.SFC<Props> = ({isOpen, toggle}) => (
  <div className={'button ' + (isOpen ? 'isOpen' : '')}
    onClick={() => toggle()}
  >
    <div className="lines open">
      <div className="line"/>
      <div className="line"/>
      <div className="line"/>
    </div>
    <div className="lines close">
      <div className="line"/>
      <div className="line"/>
    </div>
  </div>
);

export default Hamburger;
