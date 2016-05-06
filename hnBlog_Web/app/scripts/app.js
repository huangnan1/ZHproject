var apiUrl = "http://localhost:3000/";
angular.module('hnblog', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('index', {
      url: '/',
      title: 'hn博客',
      templateUrl: 'views/blog-list.html',
      controller: 'blogIndex'
    }).state('login', {
      url: '/login',
      title: '登陆',
      templateUrl: 'views/login.html',
      controller: 'blogLogin'
    });
  }]).controller('blogLogin', ['$scope', '$http', function ($scope, $http) {
    $scope.loginModel = {
      userName: '',
      passWord: '',
      login: function () {
        $http.post(apiUrl + 'login', {
          'ume': this.userName,
          'pwd': this.passWord
        }, { 'Content-Type': 'application/json' }).success(function (data) {
          if (data.code === 0) {
            console.log(data);
          }
        });
      }
    };
  }]).controller('blogIndex', ['$scope', function ($scope) {
    $scope.name = "黄楠";
  }]);
