//main-nav.js

import React from 'react';

//components
import Food from './food';
import Cats from './cats';
import Dogs from './dogs';

const MainNav = props =>	(
	<nav className="main-nav">
		<ul>
			<Cats />
			<Dogs />
			<Food />
		</ul>
	</nav>
);

export default MainNav;