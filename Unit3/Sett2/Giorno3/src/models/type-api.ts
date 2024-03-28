import { Products } from "./products";

export interface TypeAPI {
    products: Products[],
    total: number,
    skip: number,
    limit: number
}