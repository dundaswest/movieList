class Search extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      userInput : ''
    };
  }

  handleInPutChange(e) {
    this.setState({userInput:e.target.value});
    console.log('userinput ' + this.state.userInput);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text"
          keyword={this.state.keyword}
          onChange={this.handleInPutChange.bind(this)}

        />
        <button className="btn -sm-down" onClick={() => this.props.handleSearchClick(this.state.userInput) }>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}


window.Search = Search;
