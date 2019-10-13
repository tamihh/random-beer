import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { PageContainer } from "../components/page-container";
import { Button } from "../components/button";

const BeerPlaceholder =
  "https://beta.daft.ie/static/images/fallbacks/no-image-size740x480.jpg";

const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const PageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  color: grey;
`;

const Text = styled.p`
  color: grey;
`;

const Image = styled.img`
  color: grey;
  padding-right: 50px;
  width: 50%;
`;

const BeerDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Home: FunctionComponent<{}> = () => (
  <PageContainer>
    <PageHead>
      <Title className="title">The Random Beer App</Title>
      <Button>Show Another Beer</Button>
    </PageHead>
    <PageContent>
      <Image src={BeerPlaceholder} />
      <BeerDetails>
        <Title>Beer 1</Title>
        <Text>lorem ipsum dolor</Text>
      </BeerDetails>
    </PageContent>
  </PageContainer>
);

export default Home;
