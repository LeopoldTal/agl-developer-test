const SERVER_URL = 'http://localhost:3000/';
const JEST_TIMEOUT = 10 * 1000;

module.exports = {
	preset: 'jest-puppeteer',
	globals: {
		SERVER_URL,
		JEST_TIMEOUT
	},
	// testRegex: './*\\.test\\.tsx$' // is this needed?
};

console.log(`Running e2e tests at ${SERVER_URL}`);
