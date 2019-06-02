import { IResolvers } from "graphql-tools";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

const users = async () => {
  const userRepository = getRepository(User);
  return userRepository.find();
};

export const resolvers: IResolvers = {
  Query: {
    users
  }
};
