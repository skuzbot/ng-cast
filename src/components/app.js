angular.module('video-player')
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function($scope) {
      this.videos = exampleVideoData;
      this.onClick = function() {

      };
    }
  }
  );
