import React from 'react';
import { GenderGroups, Pet } from '../models/petModels';
import PetList from './PetList';

type PetGroupsProps = {
	groups: GenderGroups<Pet>
};

const PetGroups: React.FunctionComponent<PetGroupsProps> = ({ groups }) => {
	const genders = Object.keys(groups);

	if (genders.length === 0) {
		return (
			<p>No pets were found.</p>
		);
	}

	return (
		<div>
			{genders.map(gender => (
				<div className="pet-group" key={gender}>
					<h2>{gender}</h2>
					<PetList pets={groups[gender]} />
				</div>
			))}
		</div>
	);
};

export default PetGroups;
