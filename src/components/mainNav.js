//main-nav.js

import React from 'react';
import Food from '../components/food';
import Cats from '../components/cats';
import Dogs from '../components/dogs';

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