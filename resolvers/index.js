const { GraphQLDateTime } = require('graphql-iso-date');

const userResolvers = require('./user');
const taskResolvers = require('./task');
const customDateScalarResolver = {
	Date: GraphQLDateTime,
};
module.exports = [userResolvers, taskResolvers, customDateScalarResolver];
