// export interface Product {
//   productId: number;
//   name: string;
//   price: number;
//   pictureUrl: string;
//   brand: string;
//   type: string;
//   quantity: number;
// }

// export interface Basket {
//   id: number;
//   buyerId: string;
//   items: Product[];
// }

export interface Product {
  id: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}

export interface Basket {
  id: number;
  buyerId: string;
  items: Product[];
}
export interface ProductParams {
  orderBy: string;
  searchTerm?: string;
  types: string[];
  brands: string[];
  pageNumber: number;
  pageSize: number;
}
