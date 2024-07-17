import User from '../User/User';
import { IUser } from '../../interfaces/IUser';
import s from './userlist.module.scss';
import Loader from '../Loader/Loader';

interface IUserListProps {
  users: IUser[];
}

const UserList: React.FC<IUserListProps> = ({ users }) => {
  if (users.length === 0) {
    return <Loader />;
  }

  console.log('RENDER USERLIST');

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
