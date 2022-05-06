import { lazy } from 'react';
import { Title } from '../components/Title';

const Counter = lazy(() =>
	import('../components/Counter').then((component) => ({
		default: component.Counter,
	}))
);

export function CounterPage() {
	return (
		<div>
			<Title>CounterPage</Title>
			{Array.from(Array(50))
				.fill(null)
				.map((_, key) => (
					<Counter key={key} />
				))}
		</div>
	);
}
