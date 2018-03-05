angular.module('heroDetail')
  .component('heroDetail', {
  templateUrl: 'hero-detail/hero-detail.template.html',
  controller: [
    '$http',
    heroDetailCtrl]
  });

function heroDetailCtrl($http) {
  var self = this;

  this.hero = {};  
  $http.get('heroes/batman.json')
    .then(function(response) {
      self.hero = response.data;
    })
}