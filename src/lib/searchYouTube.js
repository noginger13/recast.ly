import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, key = YOUTUBE_API_KEY) => {
  // TODO
  var server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/';

  $.ajax({
    type: 'GET',
    contentType: 'application/json',
    url: server,
    data: {
      key: key,
      q: query
    },
    success: function (response) {
      console.log('Response Received', response);
      callback(response);
    },
    error: function (error) {
      console.error('Recast.ly: Failed to fetch videos', error.responseText);
    }
  });

};

export default searchYouTube;