import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	// Add a check for null or undefined before mapping
	if (!props.movies) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3' key={index}>
					<img src={movie.Poster} alt='movie' />
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
