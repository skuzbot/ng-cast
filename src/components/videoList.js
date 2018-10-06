angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',
    controller: function ($scope) {
      console.log(this);
    },
    bindings: {
      videos: '<',
      onClick: '&'
    },
  });