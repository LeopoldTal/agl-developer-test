import { render, screen } from '@testing-library/react';
import { Pet } from '../models/petModels';
import PetList from './PetList';

describe('PetList', () => {
	it('shows the names of pets', () => {
		const pets: Pet[] = [
			{ name: 'Romeo', type: 'Fish' },
			{ name: 'Juliet', type: 'Turtle' },
		];

		render(<PetList pets={pets} />);

		const list = screen.getByRole('list');
		expect(list).toHaveTextContent('Romeo');
		expect(list).toHaveTextContent('Juliet');
	});

	it('shows an empty message', () => {
		const { container } = render(<PetList pets={[]} />);

		expect(container).toHaveTextContent('No one of this gender has any pets.');
	});
});
