angular
  .module('heroesApp')
  .config([
    '$locationProvider', 
    '$routeProvider', 
    config]);

function config($locationProvider, $routeProvider) {
  $routeProvider
    .when('/hero-detail/:heroId', {
      template: '<hero-detail></hero-detail>'
    })
    .when('/hero-list', {
      template: '<hero-list></hero-list>'
    })
    .otherwise('/hero-list')
}