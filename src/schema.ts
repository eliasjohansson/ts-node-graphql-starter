import { makeExecutableSchema } from "graphql-tools";
import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";

const typeDefsPath = path.join(__dirname, "./schema");
const typeDefs = glob
  .sync(`${typeDefsPath}/*.graphql`)
  .map(x => fs.readFileSync(x, { encoding: "utf8" }));

const resolversPath = path.join(__dirname, "./resolvers");
const resolvers = glob
  .sync(`${resolversPath}/*.ts`)
  .map(resolver => require(resolver).resolvers);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
