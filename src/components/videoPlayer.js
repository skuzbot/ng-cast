angular.module('video-player')

  .component('videoPlayer', {
    //scope: {},
    templateUrl: 'src/templates/videoPlayer.html',
    controller: function () {
      this.getIframeSrc = function (videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
    },
    bindings: {
      video: '<',
    }
  });