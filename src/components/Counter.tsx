import { useState } from 'react';
import './Counter.scss'

export function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				Count is: {count}
			</button>
		</div>
	);
}
