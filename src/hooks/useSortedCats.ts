import { useState, useEffect } from 'react';
import { fetchPets } from '../apiClient/petOwnersClient';
import { rawToSortedCats } from '../services/rawToSortedCats';

export const useSortedCats = () => {
	const [sortedCats, setSortedCats] = useState({});

	useEffect(() => {
		fetchPets().then(rawToSortedCats).then(setSortedCats);
	}, [setSortedCats]);

	return sortedCats;
};
