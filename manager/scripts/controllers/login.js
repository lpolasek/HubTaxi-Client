/**
 * Created by chris on 6/24/14.
 */

angular.module('itaxiManagerApp')
    .controller('loginCtrl', ['$scope', '$rootScope', '$state' , '$auth', '$logger', '$timeout', function ($scope,  $rootScope, $state, $auth, $logger, $timeout) {
        $scope.data = {};
        $scope.loginErr = null;
        $rootScope.userFullName = $auth.getUserFullName();

        $scope.isSubmitting = null;
        // Required - set to 'success' or 'error' on success/failure
        $scope.result = null;
        // Function run ng-bs-animate-button
        $scope.fakeSubmit = function() {
            $scope.isSubmitting = true;
        };

        $scope.options = {
            buttonDefaultText: 'Login',
            buttonSubmittingText: 'Logging in',
            buttonSuccessText: 'Successfully logged',
            buttonErrorText: 'Login error',
            buttonDefaultClass: 'btn-default',
            buttonSubmittingClass: 'btn-info',
            buttonSuccessClass: 'btn-success'
        };



        $scope.loginFunc = function(data) {

            if (data.user == null || data.pass == null) {
                $scope.loginErr = 'Please complete all fields';
                $scope.result = 'error';
            } else {
                $scope.loginProcess = true;
                $auth.login(data.user, data.pass, function (err, resp) {
                    $scope.loginProcess = false;
                    if (err) {
                        $scope.loginErr = 'Username or password incorrect!';
                        $scope.data.pass = null;
                        $scope.result = 'error';
                    } else {
                        $scope.result = 'success';
                        $state.go('main.googlemap');
                        $rootScope.userInfo = $auth.getUser();
                        //console.log('User: ', $auth.getUser());
                    }
                })
            }
        };
    }]);
