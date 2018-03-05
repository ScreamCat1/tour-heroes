angular.module('heroList')
  .component('heroList', {
    templateUrl: 'hero-list/hero-list.template.html',
    controller: heroCntrl
});

function heroCntrl() {
  var self = this;
  self.orderProp = 'name';
  self.reverse = false;
  self.toggleSorted = toggleSorted;
  self.heroes = [
    {
      name: 'superman',
      occupation: 'reporter'
    },
    {
      name: 'batman',
      occupation: 'CEO of Wayne Enterprises'
    },
    {
      name: 'wonder woman',
      occupation: 'Amazon Princess'
    },
    {
      name: 'green lantern',
      occupation: 'test pilot'
    },
    {
      name: 'the flash',
      occupation: 'Forensic scientist'
    },
    {
      name: 'aquaman',
      occupation: 'King of Atlantis'
    },
    {
      name: 'cyborg',
      occupation: 'Former student'
    }
  ];

  function toggleSorted() {
    self.reverse = !self.reverse;    
  }
}