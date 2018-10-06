angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function ($scope) {
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = (video) => {
        console.log('video clicked on', video); //????
        this.currentVideo = video;
      };
      this.searchResults = () => {};
    }
  });