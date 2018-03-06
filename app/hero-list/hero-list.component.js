angular.module('heroList')
  .component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: [
      '$http',
      heroCntrl
    ]
});

function heroCntrl($http) {
  var self = this;
  self.orderProp = 'name';
  self.reverse = false;
  self.sort = sort;

  function sort(string) {
    self.reverse = self.orderProp === string ? !self.reverse : false;    
    self.orderProp = string
  }

  $http.get('heroes/heroes.json')
    .then(function(response) {
      self.heroes = response.data;
    })
}