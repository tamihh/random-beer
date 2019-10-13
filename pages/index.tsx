import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { PageContainer } from "../components/page-container";
import { Button } from "../components/button";
import { useFetch } from "../utils/use-fetch";

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

const Home: FunctionComponent<{}> = () => {
  const API_KEY = "a5c1b917e7ba62dcd79f434ed73bc72d";
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const API_ENDPOINT = `http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
  const FETCH_URL = PROXY_URL + API_ENDPOINT;

  const { response, isLoading, error } = useFetch(FETCH_URL);

  if (isLoading) {
    return <div>loading...</div>;
  }

  console.log(response, error);

  return (
    <PageContainer>
      <PageHead>
        <Title>The Random Beer App</Title>
        <Button>Show Another Beer</Button>
      </PageHead>

      <PageContent>
        <Image src={BeerPlaceholder} />
        <BeerDetails>
          <Title></Title>
          <Text>lorem ipsum dolor</Text>
        </BeerDetails>
      </PageContent>
    </PageContainer>
  );
};

export default Home;
