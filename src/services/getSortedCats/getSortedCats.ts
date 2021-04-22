import { Pet } from '../../models/petModels';

export const filterCats = (pets: Readonly<Pet[] | null>): Pet[] =>
	(pets || []).filter(({ type }) => type === 'Cat');

export const sortPets = (pets: Pet[] | null): Pet[] => (pets || []).sort(
	({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB)
);

export const getSortedCats = (pets: Readonly<Pet[] | null>): Pet[] => sortPets(filterCats(pets));
