class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (     
      <div className = "col-md-7">
        <MovieList movies={window.exampleMovieData}/>
      </div>   
    );
  }
}