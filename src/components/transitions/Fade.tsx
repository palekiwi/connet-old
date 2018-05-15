import * as React from 'react';
import Transition from 'react-transition-group/Transition';

interface Props {
  duration: {
    enter: number
    exit: number
  }
  inProp: boolean
}

const defaultStyles = {
  transition: '0.3s ease-in opacity'
};

const transitionStyles: TransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, display: 'none'}
};

const FadeTransition: React.SFC<Props> = ({ children, duration, inProp }) => (
  <Transition in={inProp} timeout={{enter: duration.enter, exit: duration.exit}}>
    {(state: string) => (
      React.cloneElement(children as React.ReactElement<any>, {
        style: Object.assign({}, defaultStyles, transitionStyles[state])
      })
    )}
  </Transition>
);

export default FadeTransition;
