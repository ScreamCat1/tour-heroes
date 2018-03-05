angular.module('heroesApp', ['heroList'])
.controller('heroesCntrl', heroesCntrl);


function heroesCntrl() {
    this.title = 'Tour of Heroes';
}
