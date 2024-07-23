import User from '../User/User';
import { IUser } from '../../interfaces/IUser';
import s from './userlist.module.scss';
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  const [activeId, setActiveId] = useState<number | null>(null);
  if (isLoading) {
    return <Loader />;
  }

  const handleClick = (id: number) => {
    setActiveId(id);
    activeId === id ? setActiveId(null) : setActiveId(id);
  };

  console.log(activeId);

  return (
    <>
      <div className={s.usersList}>
        {users?.map((user: IUser, idx: number) => (
          <motion.div
            key={user.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}>
            <User user={user} onClick={() => handleClick(user.id)} activeId={activeId} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default UserList;
