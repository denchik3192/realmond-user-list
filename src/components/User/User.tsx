import { IUser } from '../../interfaces/IUser';
import s from './user.module.scss';

const User: React.FC<IUser> = ({ username, email, phone }) => {
  return (
    <div className={s.userCard}>
      <h3 className={s.username}>{username}</h3>
      <div className={s.email}>Email: {email}</div>
      <div className={s.email}>Phone: {phone}</div>
      <div></div>
    </div>
  );
};

export default User;
