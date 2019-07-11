import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Santosh Marigowda',
		age: 2019 - 1974
	}
});

export default app;