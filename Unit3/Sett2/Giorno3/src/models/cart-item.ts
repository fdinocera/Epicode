import { Products } from "./products";

export interface CartItem extends Products {
    amount: number,
    totalPrice: number
}

