import * as React from 'react';

const initialState = {menu: false};
type State = Readonly<typeof initialState>;

interface Props {
  lang: string
}

class Header extends React.Component<Props, State> {
  state = initialState

  render () {
    return (
      <div>header</div>
    );
  }
}

export default Header;
