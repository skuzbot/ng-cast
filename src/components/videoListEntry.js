angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function () {},
    bindings: {
      video: '=',
      onClick: '&'
    },
  });