import { petOwnersUrl } from '../config/config.json';
import { PetOwner } from '../models/petModels';

export const fetchPets = (): Promise<PetOwner[]> =>
	fetch(petOwnersUrl).then(response => response.json());
