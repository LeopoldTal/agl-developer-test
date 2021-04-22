export type Pet = {
	name: string;
	type: string;
};

export type PetOwner = {
	name: string;
	gender: string;
	age: number;
	pets: Pet[] | null
};

export type GenderGroups<T> = { [gender: string]: T[] };
