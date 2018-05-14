import styled from "styled-components";
import { widths, device } from '../styles/constants';

const Container = styled.div`
  margin: 0 auto;
  position: relative;

  @media ${device.tablet} {
    max-width: ${widths.lg}px;
  }

  @media ${device.laptop} {
    max-width: ${widths.xl}px;
  }
`;

export default Container;
