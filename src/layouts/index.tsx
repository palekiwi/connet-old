import * as React from 'react';
import * as locale from '../utils/locale';

import Helmet from 'react-helmet';
import Header from '../components/Header';

const initialState = {lang: 'es'};
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

  componentDidMount () {
    this.setState({lang: locale.getLocale()});
  }

  private setLang = (lang: Lang) => {
    locale.saveLocale(lang);
    this.setState({lang});
  }

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
        <Header setLang={this.setLang} lang={this.state.lang} logo={this.props.data.logo}/>
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
