class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    return (
      <div class='movie info'>
        <div>Release date :{this.props.movie.targetMovie.release_date}</div>
        <div>VoteAverage:{this.props.movie.targetMovie.vote_average}</div>
        <div>Popularity:{this.props.movie.targetMovie.popularity}</div>
        <div>Adult: {this.props.movie.targetMovie.Adult}</div>
      </div>
    );
  }
}

