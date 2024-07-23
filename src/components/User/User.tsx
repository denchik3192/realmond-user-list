import { MouseEventHandler } from 'react';
import { IUser } from '../../interfaces/IUser';
import s from './user.module.scss';
interface IUserProps {
  user: IUser;
  onClick: (id: number) => void;
  activeId: number | null;
}

const User: React.FC<IUserProps> = ({ user, onClick, activeId }) => {
  return (
    <div
      className={`${activeId === user.id ? s.userCard + ' ' + s.active : s.userCard}`}
      onClick={() => onClick(user.id)}>
      <div className={s.userImage}>
        <img src={'/user.svg'} alt="user-image" />
      </div>

      <div>
        <h3 className={s.username}>{user.username}</h3>
        <div className={s.email}>Email: {user.email}</div>
        <div className={s.email}>Phone: {user.phone}</div>
      </div>
    </div>
  );
};

export default User;
