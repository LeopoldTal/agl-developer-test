import React from 'react';
import PetGroups from './components/PetGroups';
import { useSortedCats } from './hooks/useSortedCats';
import './App.css';

const App: React.FunctionComponent = () => {
	const { isLoading, sortedCats } = useSortedCats();

	return (
		<div className="agl-app">
			{
				isLoading
					? <p>Loading…</p>
					: <PetGroups groups={sortedCats} />
			}
		</div>
	);
};

export default App;
