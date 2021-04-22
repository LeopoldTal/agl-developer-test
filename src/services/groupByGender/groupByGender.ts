import { GenderGroups } from '../../models/petModels';

interface GenderedOwner<T> {
	gender: string;
	pets: T[] | null
};

export const groupByGender = <T>(
	petOwners: Readonly<Array<GenderedOwner<T>>>
): GenderGroups<T> => {
	const byGender: GenderGroups<T> = {};

	petOwners.forEach(({ gender, pets }) => {
		byGender[gender] = (byGender[gender] || []).concat(pets || []);
	});

	return byGender;
};
