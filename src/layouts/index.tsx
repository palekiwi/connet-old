import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';

import Helmet from 'react-helmet';
import Header from '../components/Header';

interface State {
  lang: Lang
};

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
  state: State = {lang: 'en'}

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
        <ThemeProvider theme={theme}>
          <div>
            <Header
              setLang={this.setLang}
              lang={this.state.lang}
              logo={this.props.data.logo}
            />
            {children({...this.props, ...this.state})}
          </div>
        </ThemeProvider>
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
