class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      //currentVideo : window.exampleMovieData[0]
      isWatchedView: false,
      isSearchedView: false,
      filterType: 'all',
      keyword:''
    };
  }
  handleAddMovie(addingMovie){
    this.setState({movies: this.state.movies.concat([{title:addingMovie, watched:false}])});
  }
  handleSearchClick(userInput) {
    this.setState({filterType: 'didSearch'});
    this.setState({keyword: userInput});
  } 

  handleWatchedClick() {
    this.setState({filterType: 'didWatch'});
  } 

  handleToWatchClick() {
    this.setState({filterType: 'willWatch'});
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
            <div>
              <Search movieList={this.state.movies}
                handleSearchClick={this.handleSearchClick.bind(this)}/>
            </div>
          </div>
        </nav>
        <div className="row">

          <div className="col-md-5">
            <MovieList movies={this.state.movies}
              handleUpdateMovie={this.handleUpdateMovie.bind(this)}
              keyword={this.state.keyword}
              filterType={this.state.filterType}/>
          </div>
        </div>
      </div>

    );
  }
}



