import User from '../User/User';
import { IUser } from '../../interfaces/IUser';
import s from './userlist.module.scss';
import Loader from '../Loader/Loader';

interface IUserListProps {
  users: IUser[];
  isLoading: boolean;
}

const UserList: React.FC<IUserListProps> = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

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
