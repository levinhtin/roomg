(function() {
'use strict';

  angular
    .module('roomG')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['authService', '$state'];
  function SignUpController(authService, $state) {
    var self = this;
    self.message = '';
    self.viewModel = {
      username: '',
      email: '',
      password: '',
    };

    self.signUp = signUp;

    function signUp(formModel) {
      if(formModel.$valid) {
        authService.signUp(self.viewModel).then(function(isSuccess) {
          if(isSuccess) {
            var loginModel = {
              username: formModel.username,
              password: formModel.password
            };
            authService.login(loginModel).then(function(success) {
              if(success) {
                $state.go('home.main');
              }
            });
          } else {
            self.message = 'Username or email is exsit!';
          }
        }, function() {
          
        });
      } else {
        
      }
    }
  }
})();