class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display:false ,
      watched:false
    };
  }
  render() {
    return (
      <div className = "each-Moive">
        <div className = "movie-list-entry" onClick={this.props.handleDisplayClick}>{this.props.movie.title}
          <div>
            
            <div> {this.props.display ? <MovieInfo movie={this.props.movie}/> : null }</div>
            
          </div>
        </div>  
        <button className = "watched" onClick={() => this.props.handleUpdateMovie(this.props.movie)}
        >watched</button> 
      </div> 
    );
  }
}
window.MovieListEntry = MovieListEntry;

//{this.state.showDescription ? <td className="fish-description">{this.props.fish.description}</td> : null}