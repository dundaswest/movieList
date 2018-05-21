class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isWatchedView: false,
      isSearchedView: false,
      filterType: 'all',
      keyword:'',
      display: false
    };
  }
  //todo https://gist.github.com/beth/ed2a6033b055d6419789fe32a015d590
  handleAddMovie(addingMovie){
    this.getMovieInfo(addingMovie);
    //this.setState({movies: this.state.movies.concat([{title:addingMovie}])});
  }
  handleSearchClick(userInput) {
    this.setState({filterType: 'didSearch'});
    this.setState({keyword: userInput});
  } 

  handleWatchedClick() {
    this.setState({filterType: 'didWatch'});
  } 
  //??
  handleAddingMovie(targetMovie) {
    const movieObject = targetMovie;
    movieObject.watched = false;
    this.setState({ movies: this.state.movies.concat([movieObject]) });
    //console.log('Adding movie !!!!!'+targetMovie);
  }
  //??
  handleToWatchClick() {
    this.setState({filterType: 'willWatch'});
  } 

  handleUpdateMovie(updatedMovie) {
    const movie = this.state.movies.find(movie => movie.title === updatedMovie.title);
    movie.watched = !movie.watched;
  }
  getMovieInfo(keyword) {
    this.props.Search(keyword, this.handleAddingMovie.bind(this));
    //return this.props.Search(keyword).results; 

  }
  handleDisplayClick(){

    this.setState({display:!this.display});
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
            <div>
              <Search movieList={this.state.movies}
                handleSearchClick={this.handleSearchClick.bind(this)}/>
            </div>
          </div>
        </nav>
        <div className="row">

          <div className="col-md-5">
            <MovieList movies={this.state.movies}
              display={this.state.display}
              handleUpdateMovie={this.handleUpdateMovie.bind(this)}
              keyword={this.state.keyword}
              filterType={this.state.filterType}
              addingMovie={this.state.addingMovie}
              handleDisplayClick={this.handleDisplayClick.bind(this)}/>
          </div>
        </div>
      </div>

    );
  }
}



