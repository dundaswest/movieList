
class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  filterMovies(filterType) {
    let filteredMovies;
    switch (this.props.filterType) {
    case 'all': {
      filteredMovies = this.props.movies;
      break;
    }
    case 'willWatch': {
      filteredMovies = this.props.movies.filter(movie => !movie.watched);
      break;
    }
    case 'didWatch': {
      filteredMovies = this.props.movies.filter(movie => movie.watched);
      break;
    }
    case 'didSearch': {
      filteredMovies = this.props.movies.filter(movie => movie.title.includes(this.props.keyword)); 
      break;
    }
    }

    return filteredMovies;
  }
  render() {
    const filteredMovies = this.filterMovies(this.props.filterType);
    
    return (
      <div className ="movie-list">
        {filteredMovies.map(movie => 
          <MovieListEntry movie={movie} handleUpdateMovie={this.props.handleUpdateMovie}
            toggleWatched={this.props.toggleWatched}/>
        )}
      </div> 
    );
  }
}