angular
  .module('translateApp', [])
  .controller('AlbumsIndexController', AlbumsIndexController);

AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController($http) {
  var vm = this;
  //vm.newAlbum = {};
  vm.song = {
    albumName: "2001",
    artistName: "dr. dre"
  }
  // $http({
  //   method: 'GET',
  //   url: '/api.genius.com/songs'
  // }).then(function successCallback(response) {
  //   //vm.albums = response.data;
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });

}
