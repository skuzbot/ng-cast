angular.module('video-player')

  .component('search', {
    templateUrl: 'src/templates/search.html',
    controller: function (youTube) {
      this.searchClick = () => {
        console.log('search clicked');
        youTube.search(this.input, (data) => {
          this.result(data);
        });
      };
    },
    bindings: {
      onUpdate: '<',
      result: '<'
    }
  });