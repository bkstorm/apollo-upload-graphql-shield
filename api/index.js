const { ApolloServer, gql } = require("apollo-server");
const { applyMiddleware } = require("graphql-middleware");
const { allow, shield, rule } = require("graphql-shield");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = gql`
  type User {
    email: String
    avatar: String
  }

  scalar Upload

  type Query {
    users: [User]
  }

  type Mutation {
    updateUser(email: String!, avatarFile: Upload!): User
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return [
        {
          email: "hoangnv@outlook.com",
          avatar: "http://localhost/avatar.jpg"
        }
      ];
    }
  },
  Mutation: {
    updateUser: async (parent, args, context) => {
      const avatarFile = await args.avatarFile;
      return {
        email: args.email,
        avatar: avatarFile.filename
      };
    }
  }
};

const isAuthenticated = rule()((parent, args, context) => {
  return true;
});

const permissions = shield({
  Mutation: {
    updateUser: isAuthenticated
  }
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const schemaWithMiddleware = applyMiddleware(schema, permissions);
const server = new ApolloServer(schemaWithMiddleware);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
