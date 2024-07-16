import { useEffect, useState } from 'react';
import User from '../components/User';
import { IUser } from '../interfaces/IUser';
import s from './userlist.module.scss';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/users?limit=9');
      const json = await response.json();
      console.log(json);
      setUsers(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={s.usersList}>
        {users?.map((user: IUser, idx: number) => (
          <div key={idx}>
            <User {...user} />
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
