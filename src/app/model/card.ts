import { Post } from "./post";
import { User } from "./user";

export interface Card {
    user: User,
    post: Post
}