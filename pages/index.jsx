import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Typography } from '../components/typography';
import { PageContainer } from '../components/page-container';
import { Button } from '../components/button';
import { useRandomBeerData, useBeerData } from '../utils/use-beer-data';
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

const Home = () => {
  const { randomBeerDetails, error } = useRandomBeerData();

  const fetchRequest = useCallback(() => {
    useRandomBeerData();
  }, []);

  if (randomBeerDetails) {
    const { id, name, style, breweries } = randomBeerDetails;
    const description = truncate(style.description, 200);

    return (
      <PageContainer>
        <PageHead>
          <Typography as="h1" fs={32}>
            The Random Beer App
          </Typography>
          <StyledButton onClick={() => fetchRequest()}>Show Another Beer</StyledButton>
        </PageHead>
        <Link href="/[id]" as={`/${id}`}>
          <a>
            <BeerCard image="" name={name} description={description} breweries={breweries} />
          </a>
        </Link>
      </PageContainer>
    );
  }

  if (error) return <div>oops.. something went wrong :(</div>;

  return <div>loading...</div>;
};

export default Home;
