import axios from "axios"
import { IUser } from "../interfaces/IUser"

const USERS = 'https://fakestoreapi.com/users?limit=9'

export const UsersService = {
    async getUsers() {
        const { data } = await axios<IUser[]>({
            url: USERS,
            method: 'GET',
        })
        return data
    },
}