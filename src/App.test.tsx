import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('renders a container for the app', () => {
		const { container } = render(<App />);
		expect(container.firstChild).toHaveClass('agl-app');
	});

	it('initially shows a loading indicator', () => {
		const { container } = render(<App />);
		expect(container).toHaveTextContent('Loading…');
	});
});
