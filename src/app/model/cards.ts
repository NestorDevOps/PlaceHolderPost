import { Post } from "./post";
import { User } from "./user";

/**
 * class of card
*/
 export class Cards {
   
    constructor(
        public user: User,
        public post: Post,
    ){}

} 