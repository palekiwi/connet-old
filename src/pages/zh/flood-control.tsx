import * as React from 'react';
import UnderConstruction from '../../components/pages/UnderConstruction';

interface Props {
  lang: Lang
}

const FloodControl: React.SFC<Props> = (props) => (
  <UnderConstruction {...props}/>
);

export default FloodControl;
