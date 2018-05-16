import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';

import Helmet from 'react-helmet';
import LayoutRoot from '../components/LayoutRoot';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface State {
  lang: Lang
  lock: boolean
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
  state: State = {lang: 'en', lock: false}

  componentDidMount () {
    this.setState({lang: locale.getLocale()});
  }

  private setLang = (lang: Lang) => {
    locale.saveLocale(lang);
    this.setState({lang});
  }

  private toggleLock = (b: boolean) => {
    console.log('toggling', b);
    this.setState({lock: b});
  }

  render () {
    const {children, data} = this.props;
    return (
      <LayoutRoot lock={this.state.lock}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {name: 'description', content: 'Controlnet International Site'},
          ]}
        />
        <ThemeProvider theme={theme}>
          <div>
            <Header
              toggleLock={this.toggleLock}
              setLang={this.setLang}
              lang={this.state.lang}
              logo={this.props.data.logo}
            />
            {children({...this.props, ...this.state})}
            <Footer
              lang={this.state.lang}
            />
          </div>
        </ThemeProvider>
      </LayoutRoot>
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
