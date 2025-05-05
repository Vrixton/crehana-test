import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_COUNTRIES } from '../graphql/queries';
import { Country } from '../types';
import Filters from '../components/Filters';
import CountryList from '../components/CountryList';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('');
  const [currency, setCurrency] = useState('');
  const [page, setPage] = useState(1);

  if (loading) return <div className="text-center my-5">Cargando países...</div>;
  if (error) return <div className="text-danger text-center my-5">Error al cargar países</div>;

  const countries: Country[] = data.countries;

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (continent ? c.continent.name === continent : true) &&
    (currency ? c.currency === currency : true)
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  const continents = [...new Set(countries.map(c => c.continent.name))];
  const currencies = [...new Set(countries.map(c => c.currency).filter(Boolean))];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Países del mundo</h1>

      <Filters
        search={search}
        setSearch={(val) => { setSearch(val); setPage(1); }}
        continent={continent}
        setContinent={(val) => { setContinent(val); setPage(1); }}
        currency={currency}
        setCurrency={(val) => { setCurrency(val); setPage(1); }}
        continents={continents}
        currencies={currencies}
      />

      <CountryList countries={paginated} />

      {totalPages > 1 && (
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      )}
    </div>
  );
};

export default Home;
