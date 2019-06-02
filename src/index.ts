import { createConnection, getConnectionOptions } from "typeorm";
import { ApolloServer } from "apollo-server";
import schema from "./schema";

const createTypeormConnection = async () => {
  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
  return createConnection({ ...connectionOptions, name: "default" });
};

const startServer = async () => {
  await createTypeormConnection();

  const server = new ApolloServer({
    schema
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
