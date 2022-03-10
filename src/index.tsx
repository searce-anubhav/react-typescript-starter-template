import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import 'bulma/css/bulma.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
