import { render, screen } from '@testing-library/react';
import PetGroups from './PetGroups';

describe('PetList', () => {
	it('shows the genders', () => {
		const groups = {
			Male: [],
			Female: []
		};

		render(<PetGroups groups={groups} />);

		const headings = screen.getAllByRole('heading');
		expect(headings).toHaveLength(2);
		expect(headings[0]).toHaveTextContent('Male');
		expect(headings[1]).toHaveTextContent('Female');
	});

	it('shows the names of pets', () => {
		const groups = {
			Male: [{ name: 'Captain Whiskers', type: 'Cat' }]
		};

		render(<PetGroups groups={groups} />);

		const list = screen.getByRole('listitem');
		expect(list).toHaveTextContent('Captain Whiskers');
	});

	it('shows an empty message', () => {
		const { container } = render(<PetGroups groups={{}} />);

		expect(container).toHaveTextContent('No pets were found.');
	});
});
