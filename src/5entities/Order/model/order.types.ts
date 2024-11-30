import { Tpizza } from "../../Pizza";

export interface TcartSlice {
    data: TitemCart[];
    count: number;
    price: number;
    visible: boolean;
  }
  
  export interface TitemCart {
    name: Tpizza["name"];
    size: string;
    price: number;
  }
  