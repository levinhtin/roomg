// Ionic roomGG App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'roomGG' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('roomG', ['ionic', 'ngStorage'])
.config(config)
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

config.$inject = ['$provide', '$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($provide, $stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $urlRouterProvider.otherwise('/home/starter');

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'app/views/home.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    abstract: true,
  })
  .state('home.starter', {
    url: '/starter',
    templateUrl: 'app/views/starter.html',
    controller: 'StarterController',
    controllerAs: 'starterCtrl'
  })
  .state('home.signup', {
    url: '/signup',
    templateUrl: 'app/views/signup.html',
    controller: 'SignUpController',
    controllerAs: 'signupCtrl'
  })
  .state('home.login', {
    url: '/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl'
  })
  .state('home.main', {
    url: '/main',
    templateUrl: 'app/views/main.html',
    controller: 'MainController',
    controllerAs: 'mainCtrl'
  })
}
