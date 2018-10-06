angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function (youTube, $window) {
    
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
        console.log('searchResults ran');
      };
      
      window.updateVideos = this.updateVideos = (videos) => {
        this.videos = videos;
        this.currentVideo = this.videos[0];
      };
      this.updateVideos($window.exampleVideoData);
      youTube.search('cats', this.updateVideos);
      
    }
  });