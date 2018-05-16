import * as React from 'react';
import styled from "styled-components";

interface DivProps {
  className?: string
  lock: boolean
}

const Div: React.SFC<DivProps> = (props) => (
  <div className={props.className}>{props.children}</div>
);

Div.defaultProps = {lock: false};

const StyledLayout = styled(Div)`
  overflow-y: ${props => props.lock ? 'hidden' : 'auto'};
  max-height: ${props => props.lock ? '100vh' : 'none'};
`

interface Props {
  lock?: boolean
}

const LayoutRoot: React.SFC<Props> = ({ children, lock }) => (
  <StyledLayout lock={lock}>{children}</StyledLayout>
);

export default LayoutRoot;
