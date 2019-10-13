import styled from 'styled-components';
import Link from 'next/link';

import BeerCard from '../../components/beer-card/beer-card';
import { PageContainer } from '../../components/page-container';
import { Button } from '../../components/button';

import { getBeerById } from '../../utils/api';
import { useBeerData } from '../../utils/use-beer-data';

const PageHead = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
`;
const BackButton = styled.a`
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};
`;

const Beer = ({ id }) => {
  const { isLoading, beerDetails, error } = useBeerData(id);

  if (error) {
    return <div>error</div>;
  }

  if (beerDetails) {
    const { name, labels, style, breweries } = beerDetails;

    return (
      <PageContainer>
        <PageHead>
          <Link href="/">
            <Button as="a">back</Button>
          </Link>
        </PageHead>
        <BeerCard name={name} image={labels.medium} description={style && style.description} breweries={breweries} />
      </PageContainer>
    );
  }

  return <div>loading...</div>;
};

Beer.getInitialProps = async function(context) {
  const { id } = context.query;

  return { id };
};

export default Beer;
