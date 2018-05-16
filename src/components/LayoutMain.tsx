import * as React from 'react';
import styled from "styled-components";
import { heights } from '../styles/constants';

interface DivProps {
  className?: string
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

const StyledLayout = styled(Div)`
  padding-top: ${heights.header};
`

interface Props {
  lock?: boolean
}

const LayoutMain: React.SFC<Props> = ({ children, lock }) => (
  <StyledLayout>{children}</StyledLayout>
);

export default LayoutMain;
