import * as React from 'react';

import TitleCentered from '../TitleCentered';
import TitleSplit from '../TitleSplit';
import TitleImage from '../TitleImage';
import Hero from '../Hero';
import Features from '../Features';

interface Props {
  lang: Lang
  data: {
    pagesYaml: any
  }
}

type ElProps = any

const El: React.SFC<ElProps> = (props) => {
  switch (props.format) {
    case 'centered':
      return <TitleCentered {...props}/>

    case 'split':
      return <TitleSplit {...props}/>

    case 'image':
      return <TitleImage {...props}/>

    case 'features':
      return <Features {...props}/>

    case 'hero':
      return <Hero {...props}/>
  }
};

const SimplePage: React.SFC<Props> = (props) => (
  <div>
    {props.data.pagesYaml.sections.map((s:any,i:number) =>
      <El {...s}/>
    )}
  </div>
);

export default SimplePage;
