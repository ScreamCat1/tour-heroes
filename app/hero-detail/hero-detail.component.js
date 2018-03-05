angular.module('heroDetail')
  .component('heroDetail', {
  templateUrl: 'hero-detail/hero-detail.template.html',
  controller: [
    '$http',
    '$routeParams',
    heroDetailCtrl
  ]});

function heroDetailCtrl($http, $routeParams) {
  var self = this;
  
  self.heroId = $routeParams.heroId;
  self.hero = {};  

  $http.get('heroes/' + self.heroId + '.json')
    .then(function(response) {
      self.hero = response.data;
    })
}