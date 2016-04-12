(function() {
'use strict';

  angular
    .module('roomG')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['authService'];
  function SignUpController(authService) {
    var self = this;
    self.viewModel = {
      username: '',
      email: '',
      password: '',
    };

    self.signUp = signUp;

    function signUp(formModel) {
      if(formModel.$valid) {
        authService.signUp(self.viewModel).then(function() {
          
        });
      } else {
        
      }
    }
  }
})();