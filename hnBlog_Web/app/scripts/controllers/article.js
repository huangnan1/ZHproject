/// <reference path="../../../typings/angularjs/angular.d.ts" />
app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('layout.articlepublish', {
            url: '/publish',
            title: '写文章',
            templateUrl: 'views/blog-post.html',
            controller: 'blogPublish'
        })
    }])
    .controller('blogPublish', ['$scope', function ($scope) {

    }]);

