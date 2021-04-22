import { PetOwner } from '../models/petModels';
import { fetchPets } from './petOwnersClient';

describe('fetchPets', () => {
	const TEST_PET_OWNERS: PetOwner[] = [
		{
			name: 'Foobar',
			age: 18,
			gender: 'Male',
			pets: []
		}
	];

	beforeEach(() => {
		jest.spyOn(global, 'fetch').mockResolvedValue({
			json: () => Promise.resolve(TEST_PET_OWNERS)
		} as any);
	});

	it('fetches a list of pet owners', async () => {
		const fetched = await fetchPets();
		expect(fetch).toHaveBeenCalled();
		expect(fetched).toEqual(TEST_PET_OWNERS);
	});
});
