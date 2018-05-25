import * as React from 'react';
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  margin-bottom: 0;
  padding: 1em;
  text-align: center;
`
const StyledCard = styled.div`
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  justify-content: center;
  margin-left: 0.5em;
  margin-bottom: 0.5em;
  flex-basis: 30%;
  width: 250px;
  min-height: 200px;
  &:nth-child(last) {
    margin-left: 0;
  }
  overflow: hidden;
  flex-direction: column;
  transition: .3s ease-in;
  &:hover {
    background: rgba(255,255,255,0.1);
    ${Title} {
    }
  }
`

const Image = styled.img`
`

interface Props {
  title: string
}

const Card: React.SFC<Props> = ({ title }) => (
  <StyledCard>
    <Title>{title}</Title>
  </StyledCard>
);

export default Card;
