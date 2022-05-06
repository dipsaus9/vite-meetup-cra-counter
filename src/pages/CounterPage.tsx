import { lazy } from 'react';

const Counter = lazy(() =>
	import('../components/Counter').then((component) => ({
		default: component.Counter,
	}))
);

export function CounterPage() {
	return (
		<div>
			<h1>CounterPage</h1>;
			<Counter />
		</div>
	);
}
