import { groupByGender } from './groupByGender';

describe('groupByGender', () => {
	it('is empty when there are no owners', () => {
		const byGender = groupByGender([]);
		expect(byGender).toEqual({});
	});

	it('groups pets when owners have the same gender', () => {
		const petOwners = [
			{ gender: 'Female', pets: [ 'foo', 'bar' ] },
			{ gender: 'Female', pets: [ 'baz' ] },
		];
		const byGender = groupByGender(petOwners);
		expect(byGender).toEqual({
			Female: [ 'foo', 'bar', 'baz' ]
		});
	});

	it('leaves pets ungrouped when owners have different genders', () => {
		const petOwners = [
			{ gender: 'Female', pets: [ 'foo', 'bar' ] },
			{ gender: 'Male', pets: [ 'baz' ] },
		];
		const byGender = groupByGender(petOwners);
		expect(byGender).toEqual({
			Female: [ 'foo', 'bar' ],
			Male: [ 'baz' ]
		});
	});

	it('handles owners with no pets', () => {
		const petOwners = [
			{ gender: 'Female', pets: [ 'foo' ] },
			{ gender: 'Female', pets: [] },
			{ gender: 'Female', pets: null },
		];
		const byGender = groupByGender(petOwners);
		expect(byGender).toEqual({
			Female: [ 'foo' ],
		});
	});

	it('handles genders with no pets', () => {
		const petOwners = [
			{ gender: 'Female', pets: [] },
			{ gender: 'Male', pets: [] },
			{ gender: 'Female', pets: null },
			{ gender: 'Non-binary', pets: null },
		];
		const byGender = groupByGender(petOwners);
		expect(byGender).toEqual({
			Female: [],
			Male: [],
			'Non-binary': [],
		});
	});
});
