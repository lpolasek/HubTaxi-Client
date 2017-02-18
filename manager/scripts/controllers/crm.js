'use strict';

angular.module('itaxiManagerApp')
    .controller('crmCtrl', ['$scope', '$modal', function ($scope, $modal) {

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };


        $scope.messageGroup = [
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            },
            {
                name: 'John Doe',
                title: 'Tittle of the message',
                detail: 'Content of the longest message I've ever seen',
                time: '21:30'
            }
        ];
        var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

            $scope.items = items;


            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
    }]);
