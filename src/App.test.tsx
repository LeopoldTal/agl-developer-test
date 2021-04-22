import { render } from '@testing-library/react';
import App from './App';

test('renders a container for the app', () => {
	const { container } = render(<App />);
	expect(container.firstChild).toHaveClass('agl-app');
});
