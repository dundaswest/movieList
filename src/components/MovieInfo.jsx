class MovieInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){

    return (
      <div class='movie info'>
        <div>Release date :{this.props.movie.release_date}</div>
        <div>VoteAverage:{this.props.movie.vote_average}</div>
        <div>Popularity:{this.props.movie.popularity}</div>
        <div>Adult: {this.props.movie.Adult}</div>
      </div>
    );
  }
}

