'use strict';

angular.module('conFusionApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('app',{
        url: '/',
        views: {
          'header':{
            templateUrl: 'app/views/header.html'
          },
          'content':{
            templateUrl: 'app/views/home.html',
            controller: 'IndexController'
          },
          'footer':{
            templateUrl:'app/views/footer.html'
          }
        }
      })
      .state('app.aboutus', {
        url: 'aboutus',
        views: {
          'content@':{
            templateUrl: 'app/views/aboutus.html',
            controller: 'AboutController'
          }
        }
      })
      .state('app.menu', {
        url: 'menu',
        views: {
          'content@':{
            templateUrl: 'app/views/menu.html',
            controller: 'MenuController'
          }
        }
      })
      .state('app.dishdetail', {
        url: 'menu/:id',
        views:{
            'content@': {
              templateUrl: 'app/views/dishdetail.html',
              controller: 'DishDetailController'
            }
        }

      })
      .state('app.contactus', {
        url: 'contactus',
        views:{
          'content@': {
            templateUrl: 'app/views/contactus.html',
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
