import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { PageContainer } from '../components/page-container';
import { Button } from '../components/button';
import { useRandomBeerData } from '../utils/use-beer-data';
import BeerCard from '../components/beer-card/beer-card';

const PageHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  color: grey;
`;

const Home = ({ beerDetails }) => {
  const { randomBeerDetails, error } = useRandomBeerData();

  if (randomBeerDetails) {
    const { id, name, style, breweries } = randomBeerDetails;
    return (
      <Link href="/[id]" as={`/${id}`}>
        <a>
          <PageContainer>
            <PageHead>
              <Title>The Random Beer App</Title>
              <Button>Show Another Beer</Button>
            </PageHead>
            <BeerCard image="" name={name} description={style.description} breweries={breweries} />
          </PageContainer>
        </a>
      </Link>
    );
  }

  if (error) return <div>oops.. something went wrong :(</div>;

  return <div>loading...</div>;
};

export default Home;
