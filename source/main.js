var app = angular.module('app', []);

app.controller('myCtrl1', myCtrl1);

function myCtrl1() {
  var vm = this;
  vm.myBook = 'AngularJS';
  vm.getBookmark = function() {
    return 'My bookmark'
  }

  vm.setHello = function (e) {
    console.log(e);
    vm.myBook = e.target.innerHTML;
  }
}
