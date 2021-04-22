import { GenderGroups, Pet, PetOwner } from '../models/petModels';
import { rawToSortedCats } from './rawToSortedCats';

const TEST_API_RESPONSE: PetOwner[] = [
	{
		name: 'Alice',
		gender: 'Female',
		age: 42,
		pets: [
			{ name: 'Foo', type: 'Cat' },
			{ name: 'Bar', type: 'Dog' }
		]
	},
	{
		name: 'Bob',
		gender: 'Male',
		age: 23,
		pets: [
			{ name: 'Baz', type: 'Cat' },
		]
	},
	{
		name: 'Carol',
		gender: 'Female',
		age: 13,
		pets: [
			{ name: 'Qux', type: 'Cat' }
		]
	}
];

const EXPECTED: GenderGroups<Pet> = {
	Female: [
		{ name: 'Foo', type: 'Cat' },
		{ name: 'Qux', type: 'Cat' },
	],
	Male: [
		{ name: 'Baz', type: 'Cat' },
	]
};

test('rawToSortedCats', () => {
	expect(rawToSortedCats(TEST_API_RESPONSE)).toEqual(EXPECTED);
});
