angular.module('video-player')
  .component('videoList', {
    templateUrl: './src/templates/videoList.html',
    controller: function() {
      let $ctrl = this;
      $ctrl.videoList = exampleVideoData;
      //console.log('vL data', $ctrl.videoList);
    }
    
  });