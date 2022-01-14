const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => "Hello GraphQL world!"
    }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen()
    .then(({url}) => console.log(`server is running on ${url}`))
