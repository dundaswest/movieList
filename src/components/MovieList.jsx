var MovieList = (props) => (
  <div className ="movie-list">
    {props.movies.map(movie => 
      <MovieListEntry movie={movie} />
    )}
  </div>
);