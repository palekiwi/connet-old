import styled, { keyframes } from 'styled-components';

const openIn = keyframes`
  0% {
    transform: scaleX(0);
    transform-origin: 0 0;
  }
  100% {
    transform: scaleX(1);
    transform-origin: 0 0;
  }
`;

const openOut1 = keyframes`
  0% {
    transform: scaleX(1) translate(0);
    transform-origin: 100% 0;
  }
  35% {
    transform: scaleX(0.9) translate(-5px);
  }
  100% {
    transform: scaleX(0) translate(5px);
    transform-origin: 100% 0;
  }
`;

const openOut2 = keyframes`
  0% {
    transform: scaleX(1) translate(0);
    transform-origin: 0 0;
  }
  35% {
    transform: scaleX(0.9) translate(-5px);
  }
  100% {
    transform: scaleX(0) translate(5px);
    transform-origin: 0 0;
  }
`;

const closeIn1 = keyframes`
  0% {
    transform: scaleY(0) translateY(-10px);
    transform-origin: 0 0;
  }
  100% {
    transform: scaleY(1) translateY(0);
    transform-origin: 0 0;
  }
`;

const closeIn2 = keyframes`
  0% {
    transform: scaleX(0) translateX(-10px);
    transform-origin: 0 0;
  }
  100% {
    transform: scaleX(1) translateX(0);
    transform-origin: 0 0;
  }
`;

const closeOut1 = keyframes`
  0% {
    transform: scaleY(1) translateY(0);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scaleY(0) translateY(10px);
    transform-origin: 100% 100%;
  }
`;

const closeOut2 = keyframes`
  0% {
    transform: scaleX(1) translateX(0);
    transform-origin: 100% 100%;
  }
  100% {
    transform: scaleX(0) translateX(10px);
    transform-origin: 100% 100%;
  }
`;

export const hamburger = {
  openIn,
  openOut1,
  openOut2,
  closeOut1,
  closeOut2,
  closeIn1,
  closeIn2,
};
