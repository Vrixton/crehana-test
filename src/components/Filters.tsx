import { FiltersProps } from '../types';

const Filters = ({
  search,
  setSearch,
  continent,
  setContinent,
  currency,
  setCurrency,
  continents,
  currencies,
}: FiltersProps) => {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar país..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="col-md-4">
        <select
          className="form-select"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="">Todos los continentes</option>
          {continents.map((cont) => (
            <option key={cont} value={cont}>{cont}</option>
          ))}
        </select>
      </div>

      <div className="col-md-4">
        <select
          className="form-select"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="">Todas las monedas</option>
          {currencies.map((curr) => (
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
