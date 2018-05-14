/*var MovieList = (props) => (
  <div className ="movie-list">
    {props.movies.map(movie => 
      <MovieListEntry movie={movie} handleWatchClick = {props.handleWatchClick} />
    )}
  </div>
);
*/

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let filteredMovies;
    
    if (this.props.isWatchedView) {
      filteredMovies = this.props.movies.filter(movie => movie.watched);
    } else {
      filteredMovies = this.props.movies.filter(movie => !movie.watched);
    }

    return (
      <div className ="movie-list">
        {filteredMovies.map(movie => 
          <MovieListEntry movie={movie} handleUpdateMovie={this.props.handleUpdateMovie}/>
        )}
      </div> 
    );
  }
}