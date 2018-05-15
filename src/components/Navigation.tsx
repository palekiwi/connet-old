import * as React from 'react';
import styled from "styled-components";
import Hamburger from './Hamburger2';
import Menu from './Menu';

const initialState = {isOpen: false};
type State = Readonly<typeof initialState>;

export interface Item {
  to: string
  label: {
    [key: string]: string
    en: string
    es: string
    zh: string
  }
}

interface Props {
  lang: string
  items: Array<Item>
}

const items: Array<Item> = [
  {to: '/', label: {es: 'Un', en: 'One', zh: 'Yi'} },
  {to: '/', label: {es: 'Dos', en: 'Two', zh: 'Er'} },
];

class Navigation extends React.Component<Props, State> {
  state = initialState

  private toggleMenu = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render () {
    return (
      <div>
        <Hamburger
          isOpen={this.state.isOpen}
          toggle={this.toggleMenu}
        />
        <Menu
          isOpen={this.state.isOpen}
          lang={this.props.lang}
          items={items}
        />
      </div>
    )
  }
}

export default Navigation;
