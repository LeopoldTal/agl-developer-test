import { Pet } from '../../models/petModels';
import { filterCats, getSortedCats, sortPets } from './getSortedCats';

describe('filterCats', () => {
	it('filters for cats', () => {
		const pets: Pet[] = [
			{ name: 'Bark', type: 'Dog' },
			{ name: 'Meow', type: 'Cat' },
			{ name: 'Snuggles', type: 'Cat' },
		];
		const expected: Pet[] = [
			{ name: 'Meow', type: 'Cat' },
			{ name: 'Snuggles', type: 'Cat' },
		];

		expect(filterCats(pets)).toEqual(expected);
	});

	it('handles nulls', () => {
		expect(filterCats(null)).toEqual([]);
	});
});

describe('sortPets', () => {
	it('sorts pets in place', () => {
		const pets: Pet[] = [
			{ name: 'Odie', type: 'Dog' },
			{ name: 'Garfield', type: 'Cat' },
			{ name: 'Tweety', type: 'Bird' },
		];
		const expected: Pet[] = [
			{ name: 'Garfield', type: 'Cat' },
			{ name: 'Odie', type: 'Dog' },
			{ name: 'Tweety', type: 'Bird' },
		];

		sortPets(pets);
		expect(pets).toEqual(expected);
	});

	it('returns the sorted list', () => {
		const pets: Pet[] = [{ name: 'Kitty', type: 'Cat' }];

		const sorted = sortPets(pets);
		expect(sorted).toEqual(pets);
	});

	it('handles nulls', () => {
		expect(sortPets(null)).toEqual([]);
	});
});

describe('getSortedCats', () => {
	it('gets cats sorted by name', () => {
		const pets: Pet[] = [
			{ name: 'Snuggles', type: 'Cat' },
			{ name: 'Bark', type: 'Dog' },
			{ name: 'Meow', type: 'Cat' },
			{ name: 'Garfield', type: 'Cat' },
		];
		const expected: Pet[] = [
			{ name: 'Garfield', type: 'Cat' },
			{ name: 'Meow', type: 'Cat' },
			{ name: 'Snuggles', type: 'Cat' },
		];

		expect(getSortedCats(pets)).toEqual(expected);
	});

	it('handles nulls', () => {
		expect(getSortedCats(null)).toEqual([]);
	});
});
