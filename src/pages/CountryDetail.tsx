import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_COUNTRY_BY_CODE } from '../graphql/queries';
import { CountryDetail as CountryDetailType } from '../types';

const CountryDetail = () => {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  if (loading) return <div className="text-center my-5">Cargando detalles...</div>;
  if (error || !data.country) return <div className="text-danger text-center my-5">Error al cargar el país</div>;

  const country: CountryDetailType = data.country;

  return (
    <div className="container my-5">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Volver</Link>
      <h2 className="mb-4">{country.name}</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Código:</strong> {country.code}</li>
        <li className="list-group-item"><strong>Capital:</strong> {country.capital || 'N/A'}</li>
        <li className="list-group-item"><strong>Continente:</strong> {country.continent.name}</li>
        <li className="list-group-item"><strong>Moneda:</strong> {country.currency || 'N/A'}</li>
        <li className="list-group-item">
          <strong>Idiomas:</strong> {country.languages.length ? country.languages.map(l => l.name).join(', ') : 'N/A'}
        </li>
      </ul>
    </div>
  );
};

export default CountryDetail;
