import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: red;
`;

const Home: FunctionComponent<{}> = () => (
  <div>
    <Title className="title">Random Beer</Title>
  </div>
);

export default Home;
