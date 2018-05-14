var searchMovies = (query, callback) => {
  //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
 


  const generateRequestURL = query => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${window.imdbApikey}&query=${query.replace(/ /g, '%20')}`;
  };
  const settings = {
    async: true,
    crossDomain: true,
    url: generateRequestURL('the big short'),
    method: 'GET',
    headers: {},                            
    data: {}
  };

  $.get('https://api.themoviedb.org/3/search/movie', {
    apikey: window.imdbApikey ,
    query: query
  }).done(function (response) {
    console.log(settings, response);
  }).fail(function(errorObject) {
    console.error(errorObject.responseJSON.status_message);
  }).always(function() {
    console.log('finished!');
  });

// var searchYouTube = ({key, query, max = 5}, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//   .done(({items}) => {
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });
};
window.searchMovies = searchMovies;