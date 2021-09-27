import React, { useState, useEffect } from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutingSwitch from './RoutingSwitch';
import PostFormModal from './PostFormModal';
import AuthModal from './AuthModal';

function Routing() {
	const [value, setValue] = useState('');
	return (
		<Router>
			<Header value={value} setValue={setValue} />
			<RoutingSwitch value={value} />
			<PostFormModal />
			<AuthModal />
		</Router>
	);
}

export default Routing;
