'use strict';

angular.module('conFusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app',{
        url: '/',
        views: {
          'header':{
            templateUrl: 'views/header.html'
          },
          'content':{
            templateUrl: 'views/home.html',
            controller: 'IndexController'
          },
          'footer':{
            templateUrl:'views/footer.html'
          }
        }
      })
      .state('app.aboutus', {
        url: 'aboutus',
        views: {
          'content@':{
            templateUrl: 'views/aboutus.html',
            controller: 'AboutController'
          }
        }
      })
      .state('app.menu', {
        url: 'menu',
        views: {
          'content@':{
            templateUrl: 'views/menu.html',
            controller: 'MenuController'
          }
        }
      })
      .state('app.dishdetail', {
        url: 'menu/:id',
        views:{
            'content@': {
              templateUrl: 'views/dishdetail.html',
              controller: 'DishDetailController'
            }
        }

      })
      .state('app.contactus', {
        url: 'contactus',
        views:{
          'content@': {
            templateUrl: 'views/contactus.html',
            controller: 'ContactController'
          }
        }
      });
      $urlRouterProvider.otherwise('/');
  })

/*
ngRoute Config
.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: '',
    controller: ''
  })
  .when('/menu',{
    templateUrl: 'menu.html',
    controller: 'MenuController'
  })
  .when('/menu/:id', {
    templateUrl: 'dishdetail.html',
    controller: 'DishDetailController'
  })
  .when('/aboutus',{
    templateUrl: 'aboutus.html',
    controller: ''
  })
  .when('/contactus',{
    templateUrl: 'contactus.html',
    controller: 'ContactController'
  })
  .otherwise('/');

}) */

;
