import * as React from 'react';
import Section from './Section';

interface Feature {
  title: string
  text: string
  img: any
}

interface Props {
  features: Array<Feature>
}

const Features: React.SFC<Props> = ({ features }) => (
  <div>
    {features.map((f, i) => 
      <Section
        key={i}
        format="image"
        reverse={i % 2 == 0}
        title={f.title}
        text={f.text}
        img={f.img}
      />
    )}
  </div>
);

export default Features;
