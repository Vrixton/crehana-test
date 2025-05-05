import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_COUNTRIES } from '../graphql/queries';
import { Country } from '../types';
import { Link } from 'react-router-dom';
import '../styles/home.scss';

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('');
  const [currency, setCurrency] = useState('');
  const [page, setPage] = useState(1);

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p>Error al cargar países</p>;

  const countries: Country[] = data.countries;

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (continent ? c.continent.name === continent : true) &&
    (currency ? c.currency === currency : true)
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, end);

  const continents = [...new Set(countries.map(c => c.continent.name))];
  const currencies = [...new Set(countries.map(c => c.currency).filter(Boolean))];

  return (
    <div className="home-container">
      <h1>Países del mundo</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar país..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select onChange={(e) => { setContinent(e.target.value); setPage(1); }} value={continent}>
          <option value="">Todos los continentes</option>
          {continents.map((cont) => (
            <option key={cont} value={cont}>{cont}</option>
          ))}
        </select>

        <select onChange={(e) => { setCurrency(e.target.value); setPage(1); }} value={currency}>
          <option value="">Todas las monedas</option>
          {currencies.map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>

      <ul className="country-list">
        {paginated.map((country) => (
          <Link key={country.code} to={`/country/${country.code}`}>
            <li>
              {country.name} ({country.code})
              <p>{country.continent.name} - {country.currency}</p>
            </li>
          </Link>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
