import { useState, useEffect } from 'react';
import { fetchPets } from '../apiClient/petOwnersClient';
import { rawToSortedCats } from '../services/rawToSortedCats';

export const useSortedCats = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [sortedCats, setSortedCats] = useState({});

	useEffect(() => {
		setIsLoading(true);
		fetchPets()
			.then(rawToSortedCats)
			.then(setSortedCats)
			.finally(() => setIsLoading(false));
	}, [setSortedCats]);

	return { isLoading, sortedCats };
};
