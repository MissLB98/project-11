import React, { Component } from 'react';
import Form from './components/form';
import MainNav from './components/mainNav';
import Photos from './components/photos';

class SearchApp extends Component {
	
	constructor()	{
		super();
		this.state =	{
			
		}
	}
	
  render() {
    return (
		<div className="container">
			<h1>React Photo Gallery</h1>
			<p>Displaying photos with the Flickr API</p>
	  
			<Form />

			<MainNav />

			<div className="photo-container">
				<h2>Results</h2>
				<Photos />
			</div>
		</div>
    );
  }
};

export default SearchApp;
