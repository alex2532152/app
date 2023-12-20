import { User } from "./User";

export type UsersData = {
    limit: number,
    skip: number,
    total: number,
    users: User[],
}

