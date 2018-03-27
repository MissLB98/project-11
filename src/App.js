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
          <div id="page-container">
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search/" component={Home} />
              <Route path="/search/:query" component={ImageContainer} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
};

export default SearchApp;
