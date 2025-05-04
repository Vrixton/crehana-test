import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      currency
      continent {
        name
      }
    }
  }
`

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      capital
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`