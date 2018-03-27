//App container div

import React from 'react';

//components
import Form from './form';
import MainNav from './mainNav';
import PhotoContainer from './photoContainer';

const App = props =>	(
	<div className="container">
		<h1>React Photo Gallery</h1>
		<p>Displaying photos with the Flickr API</p>
  
		<Form />

		<MainNav />
		
		<PhotoContainer />
	</div>
);

export default App;