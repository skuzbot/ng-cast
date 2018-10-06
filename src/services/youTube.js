angular.module('video-player')
  .service('youTube', function ($window, $http) {
    window.search = this.search = (query, callback) => {
      console.log('youTube searched');
      return $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: 5,
          key: $window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true'
        }
      }).then(function success({data}) {
        if (callback) {
          callback(data.items);
        }
        console.log('success! response.data: ', data.items);
      }, function error({data}) {
        console.log('error!', data);
      });
    };
  });


//https://www.googleapis.com/youtube/v3/search