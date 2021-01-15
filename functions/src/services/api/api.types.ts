import { GeneralApiProblem } from "./api-problem"

export interface Identifier {
    id: string
}

export interface User {
    id: Identifier
    name: string
    email: string
    createdAt?: Date
    updatedAt?: Date
}

export type UserResult = { data: User } | GeneralApiProblem
export type UsersResult = { data: User[] } | GeneralApiProblem
