class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className = "each-Moive">
        <div className = "movie-list-entry">{this.props.movie.title}
          <div>
            <div>Year: 1995</div>
            <div>Runtime: 107 min</div>
            <div>Meatascore:46</div>
            <div>ImdbRating:6.2</div>
            <button className = "watched" onClick={() => this.props.handleUpdateMovie(this.props.movie)}
            >watched</button>
          </div>
            
        </div>
      </div> 
    );
  }
}
window.MovieListEntry = MovieListEntry;