import styled from "styled-components";
import { widths, device } from '../styles/constants';

const Container = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    width: auto;
    margin: 0 64px;
  }

  @media ${device.widescreen} {
    width: auto;
    margin: 0 64px;
  }

  @media ${device.fullhd} {
    width: auto;
    margin: 0 64px;
  }
`;

export default Container;
