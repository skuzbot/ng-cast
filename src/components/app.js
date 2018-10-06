angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      this.videos = exampleVideoData;
      this.onClick = () => {};
      this.video = this.videos[0];  
    }
  }
  );
