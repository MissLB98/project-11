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
		  <div /*className="navigation-container"*/>
			<SearchInput onSubmit={this.navigateURL} />
			
			<h1>Suggestions</h1>
			<ul /*className="gif-name-container"*/>
				<li /*className="image-names"*/>
					<NavLink /*className="image-names-text"*/ gifname='LadyNoir' to='/search/ladynoir'>LadyNoir</NavLink>
				</li>
				<li className="image-names">
					<NavLink /*className="image-names-text"*/ to='/search/hugs'>Hugs</NavLink>
				</li>
				<li className="image-names">
					<NavLink /*className="image-names-text"*/ to='/search/hamster'>Hamster</NavLink>
				</li>
			</ul>
		  </div>
		);
	};
};

export default Navigation;