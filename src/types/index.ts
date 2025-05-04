export interface Country {
    code: string;
    name: string;
    currency: string;
    continent: {
      name: string;
    };
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