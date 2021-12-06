import { Address } from "./Address";

/**
 * Interface of user
 */
 export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
}