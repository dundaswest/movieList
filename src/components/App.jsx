class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      //currentVideo : window.exampleMovieData[0],
      keyword:'Mean girls',
      isWatchedView: false,
      isSearchedView: false,
    };
  }
  handleAddMovie(addingMovie){
    this.setState({movies: this.state.movies.concat([{title:addingMovie, watched:false}])});
    console.log(addingMovie, this);
  }
  handleSearchClick(userInput) {
    var newList = this.handleSearch(userInput);
    newList = newList.length > 0 ? newList:[{title: 'No Match'}];
    //console.log(newList);
    this.setState({movies : newList});
    //console.log(this.state);
  } 

  handleSearch(input) {
    var filtered = this.state.movies.filter((movie) => movie.title.includes(input));
    return filtered;
  }
  
  handleWatchedClick() {
    this.setState({isWatchedView: true});
  } 

  handleToWatchClick() {
    this.setState({isWatchedView: false});
  } 

  handleUpdateMovie(updatedMovie) {
    const movie = this.state.movies.find(movie => movie.title === updatedMovie.title);
    movie.watched = !movie.watched;
  }
 
  render() {
    return (   
      <div>
        <nav className="addMovie">
          <div className="col-md-6 offset-md-3">
            <div><AddMovie movieList={this.state.movies} handleAddMovie={this.handleAddMovie.bind(this)}/></div>
          </div>
        </nav>
        <div><WatchedButton handleWatchedClick={this.handleWatchedClick.bind(this)}/></div>
        <div><ToWatchButton handleToWatchClick={this.handleToWatchClick.bind(this)}/></div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search keyword ={this.state.keyword} handleSearchClick={this.handleSearchClick.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">

          <div className="col-md-5">
            <MovieList movies={this.state.movies}
              handleUpdateMovie={this.handleUpdateMovie.bind(this)}
              isWatchedView={this.state.isWatchedView} />
          </div>
        </div>
      </div>

    );
  }
}



