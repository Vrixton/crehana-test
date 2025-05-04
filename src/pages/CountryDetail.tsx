import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { GET_COUNTRY_BY_CODE } from '../graphql/queries';
import { CountryDetail as CountryDetailType } from '../types';
import '../styles/country-detail.scss';

const CountryDetail = () => {
  const { code } = useParams<{ code: string }>();
  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
  });

  if (loading) return <p>Cargando detalles...</p>;
  if (error || !data.country) return <p>Error al cargar el país</p>;

  const country: CountryDetailType = data.country;

  return (
    <div className="detail-container">
      <Link to="/">← Volver</Link>
      <h2>{country.name}</h2>
      <ul>
        <li><strong>Código:</strong> {country.code}</li>
        <li><strong>Capital:</strong> {country.capital || 'N/A'}</li>
        <li><strong>Continente:</strong> {country.continent.name}</li>
        <li><strong>Moneda:</strong> {country.currency || 'N/A'}</li>
        <li><strong>Idiomas:</strong> {country.languages.map(l => l.name).join(', ') || 'N/A'}</li>
      </ul>
    </div>
  );
};

export default CountryDetail;
