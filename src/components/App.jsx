class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies :  [],
      //currentVideo : window.exampleMovieData[0],
      keyword:'Mean girls'
    };
  }
  handleAddMovie(addingMovie){
    this.setState({movies:this.state.movies.concat([{title:addingMovie}])});
  }
  handleSearchClick(userInput) {
    var newList = this.handleSearch(userInput);
    newList = newList.length > 0 ? newList:[{title: 'No Match'}];
    console.log(newList);
    this.setState({movies : newList});
    console.log(this.state);
  } 

  handleSearch(input) {
    var filtered = this.state.movies.filter((movie) => movie.title.includes(input));
    return filtered;
  }
 
  render() {
    return (   
      <div>
        <nav className="addMovie">
          <div className="col-md-6 offset-md-3">
            <div><AddMovie movieList={this.state.movies} handleAddMovie={this.handleAddMovie.bind(this)}/></div>
          </div>
        </nav>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search keyword ={this.state.keyword} handleSearchClick={this.handleSearchClick.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">

          <div className="col-md-5">
            <MovieList movies={this.state.movies}/>
          </div>
        </div>
      </div>

    );
  }
}




//var arr = ['eun','eunh','kssf','ll']
//arr.filter((e) => /eun/.test(e))
//(2) ["eun", "eunh"]ff