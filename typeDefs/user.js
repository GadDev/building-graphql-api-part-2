const { gql } = require('apollo-server-express');
//Schema
module.exports = gql`
	# Root level type
	extend type Query {
		users: [User!]
		user(id: ID!): User
	}
	extend type Mutation {
		signup(input: signupInput): User
	}
	input signupInput {
		name: String!
		email: String!
		password: String!
	}
	# Field type
	type User {
		id: ID!
		name: String!
		email: String!
		tasks: [Task!]
	}
`;
