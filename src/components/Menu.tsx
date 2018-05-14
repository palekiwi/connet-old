import * as React from 'react';
import styled from "styled-components";
import Button from './HamburgerButton';

const initialState = {isOpen: false};
type State = Readonly<typeof initialState>;

interface Item {
  to: string
  label: {
    en: string
    es: string
    zh: string
  }
}

interface Props {
  lang: string
  items: Array<Item>
}

class Menu extends React.Component<Props, State> {
  state = initialState

  private toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render () {
    return <Button
      isOpen={this.state.isOpen}
      toggle={this.toggleMenu}
      /> ;
  }
}

export default Menu;
