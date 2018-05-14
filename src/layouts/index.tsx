import * as React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';

const initialState = {lang: ''};
type State = Readonly<typeof initialState>;

interface Props {
  children: any
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    logo: any
  }
}

class Layout extends React.Component<Props, State> {
  state = initialState

  render () {
    const {children, data} = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: 'Controlnet International Site'},
          ]}
        />
        <Header lang={this.state.lang} logo={this.props.data.logo}/>
        {children()}
      </div>
    );
  }
}

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    logo: imageSharp(id: {regex: "/ctn-logo/"}) {
      resolutions(grayscale: true, quality: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
