import React from 'react';
import { Pet } from '../models/petModels';

type PetListProps = {
	pets: Readonly<Pet[]>
};

// Names are not guaranteed to be unique
const getKey = (name: string, index: number) => `${index}-${name}`;

const PetList: React.FunctionComponent<PetListProps> = ({ pets }) => {
	if (pets.length === 0) {
		return (
			<p>No one of this gender has any pets.</p>
		);
	}

	return (
		<ul className="pet-list">
			{pets.map(({ name }, index) => (
				<li className="pet-name" key={getKey(name, index)}>
					{name}
				</li>
			))}
		</ul>
	);
};

export default PetList;
