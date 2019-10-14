import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Typography } from '../components/typography';
import { PageContainer } from '../components/page-container';
import { Button } from '../components/button';
import { useRandomBeerData } from '../utils/use-beer-data';
import BeerCard from '../components/beer-card/beer-card';
import { truncate } from '../utils/truncate';

const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    text-align: left;
    margin-bottom: 50px;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;

  @media (min-width: 1024px) {
    position: relative;
    width: auto;
  }
`;

const CenterContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [shouldFetch, setShouldFetch] = useState(true);
  const { randomBeerDetails, error } = useRandomBeerData({}, shouldFetch, setShouldFetch);

  if (randomBeerDetails) {
    const { id, name, style, breweries } = randomBeerDetails;
    const description = truncate(style.description, 200);

    return (
      <PageContainer>
        <PageHead>
          <Typography as="h1" fs={32}>
            The Random Beer App
          </Typography>
          <StyledButton
            onClick={() => {
              setShouldFetch(true);
            }}
          >
            Show Another Beer
          </StyledButton>
        </PageHead>
        <Link href="/[id]" as={`/${id}`}>
          <a>
            <BeerCard image="" name={name} id={id} description={description} breweries={breweries} showSeeMoreButton />
          </a>
        </Link>
      </PageContainer>
    );
  }

  if (error) return <CenterContent>oops.. something went wrong :(</CenterContent>;

  return <CenterContent>loading...</CenterContent>;
};

export default Home;
