import * as React from 'react';

import Section from './Section';

interface Props {
  lang: Lang
  data: {
    pagesYaml: any
  }
}

class SimplePage extends React.Component<Props, {}> {
  render () {
    const sections = this.props.data.pagesYaml.sections;
    console.log(sections);
    return (
      <div>
        {sections.map((s:any, i:any) => <Section key={i} {...s}/>)}
      </div>
    );
  }
}

export default SimplePage;
