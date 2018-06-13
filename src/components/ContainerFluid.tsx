import styled from "styled-components";
import { widths, device } from '../styles/constants';

const ContainerFluid = styled.div`
  @media ${device.desktop} {
    width: auto;
    margin: 0 64px;
    max-width: none;
  }
`;

export default ContainerFluid;
