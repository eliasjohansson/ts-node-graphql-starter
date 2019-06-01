import { createConnection, Connection } from "typeorm";
import { User } from "./entity/User";

const startServer = async () => {
  const connection: Connection = await createConnection("development");

  let user = new User();
  user.firstName = "Elias";
  user.lastName = "Johansson";

  let userRepository = connection.getRepository(User);
  userRepository.clear();
  await userRepository.save(user);
  console.log(await userRepository.find());
};

startServer();
