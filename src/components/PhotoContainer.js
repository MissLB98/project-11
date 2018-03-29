import React from 'react';

// components
import FetchImages from '../apiFetch/FetchImages';
import Capitalize from '../helper/Capitalize';
import ImageNotFound from './ImageNotFound';
import Image from './Image';

class ImageContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			photos: [],
			loading: true,
		};
	}
  
	showContent = (query) => {
		this.setState({ 
			loading: true 
		});

		return FetchImages(query)
		.then((photos) => {
			this.setState({
				photos: photos,
				hasPhotos: photos && photos.length > 0,
				loading: false
			});
		});
    }
	
    componentDidMount = () => {
		this.showContent(this.props.match.params.query);
    }
	
    componentWillReceive = (nextProps) => {
		const currentQuery = this.props.match.params.query;
		const nextQuery = nextProps.match.params.query;

		if (currentQuery !== nextQuery) {
			this.showContent(nextQuery);
		}
    }

    render() {
		const query = Capitalize(this.props.match.params.query);
		const photos = this.state.photos;
		let heading = null;

		if (this.state.hasPhotos || this.state.loading) {
			heading = <div>
				<h1 className="img-h1">Now showing images of: <span className="query">{query}</span></h1>
			</div>

			return (
			  <div>
				{heading}
				{
				  (this.state.loading)
					? <div className='loading'> </div>
					:
					<div className="image-container">
					  {
						(photos.length > 0)
						  ? photos.map((photo) => {
							return (
							  <Image id={photo.id} url={photo.url} source={photo.source} key={photo.id} />
							);
						  })
						  : <ImageNotFound />
					  }
					</div>
				}
			  </div>
			);
        }
    };
};

export default ImageContainer;