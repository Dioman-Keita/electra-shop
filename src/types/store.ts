import type { Product } from "./product";

/**
 * This interface describes the structure of a Store object.
 */

export type Store = {
    id: string;
    name: string;
    products: Product[];
    totalProducts: number;
}