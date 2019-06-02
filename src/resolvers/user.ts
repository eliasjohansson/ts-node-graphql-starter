import { getRepository, In } from "typeorm";
import { User } from "../entity/User";
import { QueryResolvers } from "../generated/graphql";

export const Query: QueryResolvers = {
  users: (_, { ids }) => {
    const userRepository = getRepository(User);
    if (ids) {
      return userRepository.find({ id: In(ids) });
    }
    return userRepository.find();
  },
  user: (_, { id }) => {
    const userRepository = getRepository(User);
    return userRepository.findOneOrFail(id);
  }
};

export const resolvers = { Query };
