export interface Country {
    code: string;
    name: string;
    currency: string;
    continent: {
      name: string;
    };
}
export interface CountryListProps {
  countries: Country[];
}
export interface CountryDetail {
    code: string;
    name: string;
    currency: string;
    capital: string;
    continent: {
      name: string;
    };
    languages: {
      name: string;
    }[];
  }
  export interface FiltersProps {
    search: string;
    setSearch: (val: string) => void;
    continent: string;
    setContinent: (val: string) => void;
    currency: string;
    setCurrency: (val: string) => void;
    continents: string[];
    currencies: string[];
  }
  export interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (val: number) => void;
  }