angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: 'src/templates/videoListEntry.html',
    controller: function() {
      console.log('videoListEntry', this);
    },
    bindings: {video: '<'},
  });