import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Navigation from './components/Navigation';
import Home from './components/Home';
import ImageContainer from './components/ImageContainer';

//App
class SearchApp extends Component {
	
	constructor() {
		super();
		this.state = {
			photos: []
		};
	}
	
	render() {
    return (
      <BrowserRouter>
          <div /*id="page-container"*/>
			<h1>React Gallery</h1>
			<p>Using the Flickr API</p>
			
            <Navigation />
			
            <Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search/" component={Home} />
				<Route path="/search/:query" component={ImageContainer} />
            </Switch>
			
			<p>If the page doesn't redirect you to your searches, then please reload and try again by hitting F5 on your keyboard.</p>
          </div>
      </BrowserRouter>
    );
  }
};

export default SearchApp;
