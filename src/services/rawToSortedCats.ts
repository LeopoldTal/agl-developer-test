// Convenience function to process the raw API response in one call

import { GenderGroups, Pet, PetOwner } from '../models/petModels';
import { getSortedCats } from './getSortedCats/getSortedCats';
import { groupByGender } from './groupByGender/groupByGender';

export const rawToSortedCats = (petOwners: PetOwner[]): GenderGroups<Pet> => {
	const byGender = groupByGender(petOwners);

	const sortedCats: GenderGroups<Pet> = {};
	Object.keys(byGender).forEach(gender => {
		sortedCats[gender] = getSortedCats(byGender[gender]);
	});

	return sortedCats;
};
