import { Avengers, getById } from "./db";

const resolvers = {
	Query: {
		avengers: () => Avengers,
		hero: (_, { id }) => getById(id),
	},
};

export default resolvers;
