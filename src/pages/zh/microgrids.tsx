import * as React from 'react';
import UnderConstruction from '../../components/pages/UnderConstruction';

interface Props {
  lang: Lang
}

const Microgrids: React.SFC<Props> = (props) => (
  <UnderConstruction {...props}/>
);

export default Microgrids;
