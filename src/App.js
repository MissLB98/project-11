import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Navigation from './components/MainNav';
import Home from './components/Home';
import ImageContainer from './components/PhotoContainer';

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
          <div className="container">
			<h1 className="heading">React Gallery</h1>
			<p>Using the Flickr API</p>
			
            <Navigation />
			
            <Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search/" component={Home} />
				<Route path="/search/:query" component={ImageContainer} />
            </Switch>
			
			<p className="instruction"><span>WARNING: </span>If you are not redirected to your searches, then please try again by reloading the page.</p>
			
			<p>&copy; Leah Birch</p>
			
          </div>
      </BrowserRouter>
    );
  }
};

export default SearchApp;
