
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from 'graphql';

const linkType = new GraphQLObjectType({
	name: 'Link',
	fields: () => ({
		_id: { type: GraphQLString },
		title: { type: GraphQLString },
		url: { type: GraphQLString }
	})
});

export const Schema = (db) => {

	const schema = new GraphQLSchema({
		query: new GraphQLObjectType({
			name: 'Query', // could be anything
			fields: () => ({
				links: {
					type: new GraphQLList(linkType),
					resolve: () => {
						return db.collection('links').find({}).toArray();
					}
				}
			})
		})
	});

	return schema;
};
