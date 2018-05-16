class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false 
    };
  }
  render() {
    return (
      <div className = "each-Moive">
        <div className = "movie-list-entry" onClick={this.props.handleDisplayClick}>{this.props.movie.targetMovie.title}
          <div>
            
            <div> {this.props.display ? <MovieInfo movie={this.props.movie}
              display={this.props.display}/> : null }</div>
            <button className = "watched" onClick={() => this.props.handleUpdateMovie(this.props.movie)}
            >watched</button>
          </div>
        </div>   
      </div> 
    );
  }
}
window.MovieListEntry = MovieListEntry;

//{this.state.showDescription ? <td className="fish-description">{this.props.fish.description}</td> : null}