import { getRepository } from 'typeorm';
import { User } from '../entities/users';

export const getAll = async () => {
  return getRepository(User).find({});
};

export const save = async (user: User) => {
  return getRepository(User).save(user);
};

export const remove = async (ids: number[] | number) => {
  return getRepository(User).delete(ids);
};

export const findById = async (id: number): Promise<User> => {
  const users = await getRepository(User).find({
    where: {
      id
    }
  });
  return users[0] || null;
};

export const findByUserName = async (userName: string): Promise<User> => {
  const users = await getRepository(User).find({
    where: {
      userName
    }
  });
  return users[0] || null;
};
