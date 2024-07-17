import { useEffect, useMemo, useState } from 'react';
import { IUser } from '../interfaces/IUser';
import { UsersService } from '../services/users.service';

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await UsersService.getUsers();
            setUsers(response);
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

    return { searchValue, setSearchValue, filteredUsers };
};

export default useUsers;
