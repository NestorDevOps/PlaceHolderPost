import { company } from "./company";
import { Geo } from "./Geo";

/**
 * Interface of Address
 */
 export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: number,
    geo: Geo,
    phone: string,
    website: string,
    company: company
}