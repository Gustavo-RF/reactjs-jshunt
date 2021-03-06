import React from 'react';

import './styles.css';
import Header from './components/Header';
import Main from './pages/Main'
import Routes from './routes';

function App() {
	return (
		<div className="App">
			<Header />

			<Routes />
		</div>
	);
}

export default App;
