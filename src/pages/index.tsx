import * as React from 'react';
import { navigateTo } from 'gatsby-link';

interface Props {
  lang: Lang
}

class IndexPage extends React.Component<Props, {}> {
  componentDidUpdate () {
    const lang = this.props.lang;
    lang !== 'en' && navigateTo(`/${this.props.lang}/`);
  }
  render () {
    return <div>{this.props.lang}</div>;
  }
}

export default IndexPage;
