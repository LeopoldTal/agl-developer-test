// @ts-ignore: noIsolatedModules
describe('AGL Developer test', () => {
	beforeAll(async () => {
		await page.goto(SERVER_URL);
		await page.waitForSelector('.pet-group-list');
	}, JEST_TIMEOUT);

	it('shows genders', async () => {
		expect(page).toMatch('Male');
		expect(page).toMatch('Female');
	}, JEST_TIMEOUT);

	it('shows grouped pets', async () => {
		const groups = await page.$$('.pet-group');
		expect(groups).not.toHaveLength(0);
		for (let group of groups) {
			const headings = await group.$$('h2');
			expect(headings).toHaveLength(1);

			const petLists = await group.$$('ul');
			expect(petLists).toHaveLength(1);
		}
	}, JEST_TIMEOUT);

	it('shows pet names alphabetically within a group', async () => {
		const petLists = await page.$$('ul');
		expect(petLists).not.toHaveLength(0);
		for (let petList of petLists) {
			const items = await petList.$$('li.pet-name');
			const names = await Promise.all(
				items.map(item => item.getProperty('textContent')
				));
			const sorted = [...names].sort();
			expect(names).toEqual(sorted);
		}
	}, JEST_TIMEOUT);
});
