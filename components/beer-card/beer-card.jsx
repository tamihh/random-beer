import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Typography } from '../typography';

const BeerPlaceholder = 'https://beta.daft.ie/static/images/fallbacks/no-image-size740x480.jpg';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 20px;
  flex-direction: column;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const BreweryText = styled(Typography)`
  text-transform: uppercase;
  font-size: 12px;
`;

const ImageContainer = styled.div`
  width: 100%;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    padding-right: 50px;
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const BeerDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const SeeMoreButton = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxs}px;
`;

export const BeerCard = ({ breweries, description, image, id, name, showSeeMoreButton }) => {
  const renderBreweries = () =>
    breweries && breweries.map(brewery => <BreweryText key={`brewery-${brewery.id}`}>{brewery.name}</BreweryText>);

  return (
    <Container>
      <ImageContainer>
        <Image src={image || BeerPlaceholder} />
      </ImageContainer>
      <BeerDetails>
        <Typography as="h2">{name}</Typography>
        {renderBreweries()}
        <Typography>{description}</Typography>
        {showSeeMoreButton && (
          <Link href="/[id]" as={`/${id}`}>
            <SeeMoreButton>See more...</SeeMoreButton>
          </Link>
        )}
      </BeerDetails>
    </Container>
  );
};

export default BeerCard;
