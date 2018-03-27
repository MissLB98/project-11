//photo container

import React from 'react';

import Photos from './photos';

const PhotoContainer = props =>	(
	<div className="photo-container">
		<h2>Results</h2>
		<Photos />
	</div>
);

export default PhotoContainer;