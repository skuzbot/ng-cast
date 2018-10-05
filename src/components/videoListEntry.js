angular.module('video-player')
  .component('videoListEntry', {
    templateUrl: './src/templates/videoListEntry.html',
    controller: function() {
      let $ctrl = this;
      $ctrl.videoList = exampleVideoData;
      console.log('vLE data', $ctrl.videoList);
    }
  });