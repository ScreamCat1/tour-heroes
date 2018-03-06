angular.module('core')
  .filter('capitalize', capitalize);

function capitalize() {
  return function(input) {
    return input.toLowerCase().replace(/\b./g, function(a){ return a.toUpperCase(); });
  }
}