import User from '../User/User';
import { IUser } from '../../interfaces/IUser';
import s from './userlist.module.scss';
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';

interface IUserListProps {
  users: IUser[];
  isLoading: boolean;
}

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const UserList: React.FC<IUserListProps> = ({ users, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={s.usersList}>
        {users?.map((user: IUser, idx: number) => (
          <motion.div
            key={idx}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}>
            <User {...user} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default UserList;
