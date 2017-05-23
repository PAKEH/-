
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
    
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	.state('reg', {
     			url:'/reg',
          templateUrl: 'templates/reg.html',
          controller:'RegCtrl'
      
    }).state('login', {
      		url:'/login',
          templateUrl: 'templates/login.html',
          controller:'LoginCtrl'//添加控制器
    });
  $urlRouterProvider.otherwise('/reg');
});

    