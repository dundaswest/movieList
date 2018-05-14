class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className = "movie-list-entry">{this.props.movie.title}
          <button className = "watched" onClick={() => this.props.handleUpdateMovie(this.props.movie)}>watched</button>
        </div>
  
      </div> 
    );
  }
}
window.MovieListEntry = MovieListEntry;