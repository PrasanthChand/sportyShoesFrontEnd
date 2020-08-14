import { User } from './user';
import { Product } from './product';


export class Purchase {
    purchaseId: number;
    purchaseDate: Date;
    users:User[];
    products:Product[];
}