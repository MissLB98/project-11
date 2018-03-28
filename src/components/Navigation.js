import React from 'react';
import { NavLink } from 'react-router-dom';

// components
import SearchInput from './SearchInput';

class Navigation extends React.Component {

	navigateURL = (query) => {
		window.location.assign(`/search/${query}`);
	}

	render() {
		return (
		  <div>
			<SearchInput onSubmit={this.navigateURL} />
			
			<h1>Search Suggestions</h1>
			<ul>
				<li>
					<NavLink gifname='LadyNoir' to='/search/ladynoir'>LadyNoir</NavLink>
				</li>
				<li className="image-names">
					<NavLink to='/search/bug'>Bug</NavLink>
				</li>
				<li className="image-names">
					<NavLink to='/search/meme'>Meme</NavLink>
				</li>
			</ul>
		  </div>
		);
	};
};

export default Navigation;