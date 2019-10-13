import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BeerPlaceholder = 'https://beta.daft.ie/static/images/fallbacks/no-image-size740x480.jpg';

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

const BeerCard = ({ breweries, description, image, name }) => {
  const renderBreweries = () =>
    breweries && breweries.map(brewery => <Text key={`brewery-${brewery.id}`}>{brewery.name}</Text>);

  return (
    <PageContent>
      <Image src={image || BeerPlaceholder} />
      <BeerDetails>
        <Title>{name}</Title>
        {renderBreweries()}
        <Text>{description}</Text>
      </BeerDetails>
    </PageContent>
  );
};

export default BeerCard;
