import { Category } from './category.model';
export interface Product {

  _id?: string;
  title: string;
  description: string;
  price: number;
  photo: string;
  category: Category;

}
