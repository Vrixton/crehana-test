import { Link } from 'react-router-dom';
import { CountryListProps } from '../types';

const CountryList = ({ countries }: CountryListProps) => (
  <ul className="list-group">
    {countries.map((country) => (
      <Link
        to={`/country/${country.code}`}
        key={country.code}
        className="list-group-item list-group-item-action"
      >
        <div className="d-flex justify-content-between align-items-center">
          <strong>{country.name} ({country.code})</strong>
          <span>{country.continent.name} ({country.currency})</span>
        </div>
      </Link>
    ))}
  </ul>
);

export default CountryList;
