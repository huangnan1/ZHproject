/// <reference path="../../typings/angularjs/angular.d.ts" />
var app=angular.module('hnblog', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');
    $stateProvider.state('login', {
      url: '/login',
      title: '登陆',
      templateUrl: 'views/login.html',
      controller: 'blogLogin'
    });
  }])
  .run(['$rootScope', '$system', function ($rootScope, $system) {
    $rootScope.$system = angular.extend($system);
  }])
  .controller('blogLogin', ['$scope', '$http', '$system', function ($scope, $http, $system) {
    $scope.loginModel = {
      userName: '',
      passWord: '',
      login: function () {
        $http.post($system.apiUrl + 'login', {
          'ume': this.userName,
          'pwd': this.passWord
        }, { 'Content-Type': 'application/json' }).success(function (data) {
          if (data.code === 0) {
            console.log(data);
          }
        });
      }
    };
  }])
