export interface Country {
    code: string;
    name: string;
    currency: string;
    continent: {
      name: string;
    };
}