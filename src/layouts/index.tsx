import * as React from 'react';
import * as locale from '../utils/locale';
import { ThemeProvider } from "styled-components";
import { main as theme } from '../styles/themes';
import { isRoot } from '../utils/helpers';

import fontawesome from '@fortawesome/fontawesome';
import * as FontAwesomeIcon from '@fortawesome/react-fontawesome'
import * as faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

fontawesome.library.add(faCoffee);

import Helmet from 'react-helmet';
import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface State {
  lang: Lang
  lock: boolean
};

interface Props {
  children: any
  location: {
    pathname: string
  }
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
    const {children, data, location} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <LayoutRoot lock={this.state.lock}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Controlnet International Site'},
            ]}
          />
          <Header
            toggleLock={this.toggleLock}
            setLang={this.setLang}
            lang={this.state.lang}
            logo={this.props.data.logo}
          />
          <LayoutMain>
            {children({...this.props, ...this.state})}
          </LayoutMain>
          <Footer
            lang={this.state.lang}
          />
        </LayoutRoot>
      </ThemeProvider>
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
