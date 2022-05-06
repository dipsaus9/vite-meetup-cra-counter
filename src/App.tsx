import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() =>
	import('./pages/Home').then((component) => ({
		default: component.Home,
	}))
);

const CounterPage = lazy(() =>
	import('./pages/CounterPage').then((component) => ({
		default: component.CounterPage,
	}))
);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello CRA + React!</p>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/counter">Counter</Link>
						</li>
					</ul>
				</nav>

				<Suspense fallback={null}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/counter" element={<CounterPage />} />
					</Routes>
				</Suspense>
			</header>
		</div>
	);
}

export default App;
