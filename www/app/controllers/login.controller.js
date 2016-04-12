(function() {
'use strict';

  angular
    .module('roomG')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['authService', '$state'];
  function LoginController(authService, $state) {
    var self = this;
    self.loginModel = {
      username: '',
      password: ''
    };
    self.login = login;

    function login(formLogin) {
      if(formLogin.$valid) {
        authService.login(self.loginModel).then(function(success) {
          if(success) {
            $state.go('home.main');
          }
        })
      }
    }
  }
})();