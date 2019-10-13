import fetch from 'isomorphic-unfetch';
import BeerCard from '../../components/beer-card/beer-card';
import { getBeerById } from '../../utils/api';
import { useBeerData } from '../../utils/use-beer-data';

const Beer = ({ id }) => {
  const { isLoading, beerDetails, error } = useBeerData(id);

  if (error) {
    return <div>error</div>;
  }

  if (beerDetails) {
    const { name, labels, style, breweries } = beerDetails;

    return (
      <BeerCard name={name} image={labels.medium} description={style && style.description} breweries={breweries} />
    );
  }

  return <div>loading...</div>;
};

Beer.getInitialProps = async function(context) {
  const { id } = context.query;

  return { id };
};

export default Beer;
