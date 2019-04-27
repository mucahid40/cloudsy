import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

const QueryType = new GraphQLObjectType

export default new GraphQLSchema({
  query: QueryType,
})