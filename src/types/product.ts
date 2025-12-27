/**
 * This interface describes the structure of a Product object.
 */
export interface Product {
    id: string;
    name: string;
    price: string;
    description?: string;
    inStock: boolean;
    quantity: number;
    categories: string;
    tags?: string;
    url: string;
}
