angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function ($scope) {
      this.videos = exampleVideoData;
      this.onClick = (vid) => {
        console.log('clicked');
        this.currentVideo = vid; //????
      };
      this.selectVideo = () => {};
      this.searchResults = () => {};
      this.currentVideo = this.videos[0];
    }
  });