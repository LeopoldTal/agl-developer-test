import { render, waitFor } from '@testing-library/react';
import App from './App';
import { PetOwner } from './models/petModels';

const TEST_PET_OWNERS: PetOwner[] = [
	{
		name: 'Alice',
		age: 20,
		gender: 'Female',
		pets: [
			{ name: 'Fluffy', type: 'Cat' }
		]
	}
];

describe('App', () => {
	beforeEach(() => {
		jest.spyOn(global, 'fetch').mockResolvedValue({
			json: () => Promise.resolve(TEST_PET_OWNERS)
		} as any);
	});

	it('renders a container for the app', async () => {
		const { container } = render(<App />);
		await waitFor(() => {
			expect(container.firstChild).toHaveClass('agl-app');
		});
	});

	it('initially shows a loading indicator', async () => {
		const { container } = render(<App />);
		await waitFor(() => {
			expect(container).toHaveTextContent('Loading…');
		});
	});

	it('shows cat names', async () => {
		const { container } = render(<App />);
		await waitFor(() => {
			expect(container).toHaveTextContent('Fluffy');
			expect(container).not.toHaveTextContent('Loading…');
		});
	});
});
