const { tasks, users } = require('../constants');
const User = require('../database/models/user');
module.exports = {
	//Query reso
	Query: {
		users: () => users,
		user: (_, { id }, cxt, info) => users.find((user) => user.id === id),
	},
	Mutation: {
		signup: async (_, { input }) => {
			try {
				const user = await User.findOne({ email: input.email });
				if(user) {
					throw new Error("Email already in use")
				}
				
			} catch (error) {
				console.log(error);
				throw error;
			}
		},
	},

	User: {
		tasks: (parent, args, ctx, info) => {
			return tasks.filter((task) => task.userId === parent.id);
		},
	},
};
