export const Avengers = [
	{
		id: 1,
		name: "Tony Stark",
		hero_name: "Ironman",
		gender: "male",
		age: 53,
	},
	{
		id: 2,
		name: "Steve Rogers",
		hero_name: "Captin America",
		gender: "male",
		age: 100,
	},
	{
		id: 3,
		name: "Natasha Romanoff",
		hero_name: "Black Widow",
		gender: "female",
		age: 38,
	},
	{
		id: 4,
		name: "Thor Odinson",
		hero_name: "Thor",
		gender: "male",
		age: 1500,
	},
	{
		id: 5,
		name: "Bruce Banner",
		hero_name: "Hulk",
		gender: "male",
		age: 54,
	},
	{
		id: 6,
		name: "Peter Parker",
		hero_name: "Spiderman",
		gender: "male",
		age: 15,
	},
	{
		id: 7,
		name: "Clinton Barton",
		hero_name: "Hawkeye",
		gender: "male",
		age: 52,
	},
	{
		id: 8,
		name: "Scott Lang",
		hero_name: "Antman",
		gender: "male",
		age: 43,
	},
	{
		id: 9,
		name: "Wanda Maximoff",
		hero_name: "Scarlet Witch",
		gender: "female",
		age: 23,
	},
	{
		id: 10,
		name: "Vision",
		hero_name: "Vision",
		gender: "male",
		age: 3,
	},
	{
		id: 11,
		name: "Carol Danvers",
		hero_name: "Captain Marvel",
		gender: "female",
		age: 73,
	},
	{
		id: 12,
		name: "Stephen Strange",
		hero_name: "Doctor Strange",
		gender: "male",
		age: 42,
	},
];

export const getById = (id) => {
	const filteredHero = Avengers.filter((hero) => hero.id == id);
	return filteredHero[0];
};
