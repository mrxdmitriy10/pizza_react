export interface Tpizza {
    name: string;
    description: string;
    variant: {
      size: string;
      price: number;
    }[];
    img: string;
  }