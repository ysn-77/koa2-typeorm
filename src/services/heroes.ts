import * as joi from 'joi';
import * as repo from '../repositories/heroes';
import * as userRepo from '../repositories/users';
import * as interfaces from '../interfaces/hero'
import { Heroes } from '../entities/heroes';

export const getAll = async () => {
  return repo.getAll();
};

export const addHero = async (hero: interfaces.IHeroRequest, userId: number) => {
  await joi.validate(hero, {
    name: joi.string().required(),
  });

  const toSaveHero = new Heroes();
  toSaveHero.name = hero.name;

  const user = await userRepo.findById(userId);
  toSaveHero.user = user;

  return repo.save(toSaveHero);
};

export const deleteHero = async (hero: interfaces.IHeroDeleteRequest) => {
  await joi.validate(hero, {
    id: joi.number().required(),
  });
  return repo.remove(hero.id);
};

export const updateHero = async (hero: interfaces.IHeroUpdateRequest) => {
  await joi.validate(hero, {
    name: joi.string().required(),
    id: joi.number().required(),
  });
  const toSaveHero = new Heroes();
  toSaveHero.id = hero.id;
  toSaveHero.name = hero.name;
  return repo.save(toSaveHero);
};
