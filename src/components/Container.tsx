import styled from "styled-components";
import { widths, device } from '../styles/constants';

const Container = styled.div`
  margin: 0 auto;

  @media ${device.desktop} {
    max-width: ${widths.desktop};
    width: ${widths.desktop};
  }

  @media ${device.widescreen} {
    max-width: ${widths.widescreen};
    width: auto;
  }

  @media ${device.fullhd} {
    max-width: ${widths.fullhd};
    width: auto;
  }
`;

export default Container;
