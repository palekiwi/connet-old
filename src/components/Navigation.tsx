import * as React from 'react';
import styled from "styled-components";
import Hamburger from './Hamburger2';
import Menu from './Menu';

const initialState = {isOpen: false};
type State = Readonly<typeof initialState>;

interface Props {
  lang: Lang
  items: Array<Item>
  setLang: setLang
  toggleLock: (b: boolean) => void
}

const items: Array<Item> = [
  {to: '/about', label: {en: 'About Controlnet', zh: '關於健各科技'} },
  {to: '/contact', label: {en: 'Contact', zh: '跟我們聯絡'} },
  {to: '/microgrids', label: {en: 'Microgrids', zh: '微電網'} },
  {to: '/scada', label: {en: 'SCADA', zh: 'SCADA'} },
  {to: '/energy-saving', label: {en: 'Energy Saving', zh: '節能系統'} },
  {to: '/automation', label: {en: 'Automation', zh: '微電網'} },
  {to: '/flood-control', label: {en: 'Flood Control', zh: '抽水站自動化'} },
  {to: '/other', label: {en: 'Other Projects', zh: '其他服務'} },
];

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
          isOpen={this.state.isOpen}
          lang={this.props.lang}
          items={items}
          setLang={this.props.setLang}
          toggle={this.toggleMenu}
        />
      </div>
    )
  }
}

export default Navigation;
