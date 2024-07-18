/*
useUsers - custom hook for working with Users.
@returns {{
    searchValue, setSearchValue, filteredUsers
   }} - object with the following properties:
   setSearchValue - Dispath function
   searchValue - inputValue from serach.
   filteredUsers - search result array.
   isLoading - users fetching status
*/
import { useEffect, useMemo, useState } from 'react';
import { IUser } from '../interfaces/IUser';
import { UsersService } from '../API/usersAPI';

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await UsersService.getUsers();
            setUsers(response);
            setIsLoading(false)
        };
        fetchData();
    }, [])

    const filteredUsers = useMemo(() => {

        const lowerCasedQuery = searchValue.toLowerCase().trim();
        const filtered = users?.filter((user) => {
            const lowerCasedName = user.username.toLowerCase();
            const lowerCasedEmail = user.email.toLowerCase();
            const lowerCasedPhone = user.phone.toLowerCase();
            return (
                lowerCasedName.includes(lowerCasedQuery) ||
                lowerCasedEmail.includes(lowerCasedQuery) ||
                lowerCasedPhone.includes(lowerCasedQuery)
            );
        });

        return filtered;

    }, [searchValue, users])

    return { searchValue, setSearchValue, filteredUsers, isLoading };
};

export default useUsers;
