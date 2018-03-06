angular.module('heroDetail')
  .component('heroDetail', {
  templateUrl: 'hero-detail/hero-detail.template.html',
  controller: [
    '$http',
    '$routeParams',
    heroDetailCtrl
  ]});

function heroDetailCtrl($http, $routeParams) {
  var self = this,
      more = 'Read More',
      less = 'Read Less';
  
  self.heroId = $routeParams.heroId;
  self.hero = {};
  self.isShowed = false;
  self.showMessage = more;
  self.showMore = showMore;

  function showMore() {
    self.showMessage = self.showMessage === more ? less : more;
    self.isShowed = !self.isShowed;
  }

  $http.get('heroes/' + self.heroId + '.json')
    .then(function(response) {
      self.hero = response.data;
    })
}