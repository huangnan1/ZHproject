/// <reference path="../../../typings/angularjs/angular.d.ts" />
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('layout',{
                templateUrl:'views/global/layout.html'
            })
            .state('layout.index', {
                url: '',
                title: 'hn博客',
                templateUrl: 'views/blog-index.html',
                controller: 'blogIndex'
            })
    }])
    .controller('blogIndex', ['$scope', function ($scope) {
        $scope.name = "黄楠";
    }]);

