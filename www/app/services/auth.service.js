(function() {
'use strict';

  angular
    .module('roomG')
    .service('authService', authService);

  authService.$inject = ['$q', '$localStorage'];
  function authService($q, $localStorage) {
    this.signUp = signUp;
    var $storage = $localStorage;
    if(!$storage.users) {
      $storage.users = [];
    }
    ////////////////

    function signUp(signUpModel) {
      var defer = $q.defer();
      if(signUpModel) {
        var users = $storage.users;
        var i = 0
        for(i; i < users.length; i++) {
          if(users[i].username === signUpModel.username || users[i].email === signUpModel.email) {
            break;
          }
        }
        if(i === users.length) {
          $storage.users.push(signUpModel);
          defer.resolve(true);
        } else {
          defer.resolve(false);
        }
      } else {
        defer.reject();
      }
      return defer.promise;
     }

    function login(userLoginModel) {
      var defer = $q.defer();
      if(signUpModel) {
        var users = $storage.users;
        var i = 0;
        for(i; i < users.length; i++) {
          if(users[i].username == userLoginModel.username && users[i].password === userLoginModel.password) {
            break;
          }
        }
        if(i === users.length) {
          
        }
        defer.resolve();
      } else {
        defer.reject();
      }
      return defer.promise;
    }
  }
})();