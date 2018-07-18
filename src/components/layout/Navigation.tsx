import * as React from 'react';
import styled from "styled-components";
import Hamburger from './Hamburger2';
import Menu from './Menu';

const initialState = {isOpen: false};
type State = Readonly<typeof initialState>;

interface Props {
  lang: Lang
  setLang: setLang
  toggleLock: (b: boolean) => void
  logo: any
  pages: any
  solutions: any
}

class Navigation extends React.Component<Props, State> {
  state = initialState

  componentWillUpdate (_: Props, nextState: State) {
      this.state.isOpen !== nextState.isOpen && this.props.toggleLock(nextState.isOpen);
  }

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
          logo={this.props.logo}
          isOpen={this.state.isOpen}
          lang={this.props.lang}
          setLang={this.props.setLang}
          toggle={this.toggleMenu}
          pages={this.props.pages}
          solutions={this.props.solutions}
        />
      </div>
    )
  }
}

export default Navigation;
