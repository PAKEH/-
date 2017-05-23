angular.module('starter.controllers', [])
.controller('RegCtrl',function($scope,$state){
		$scope.log=function(){//点击事件方法--跳转到l.html
			$state.go('login')
		}
})
.controller('LoginCtrl',function($scope,$state){
		$scope.reg=function(){//点击事件方法--跳转到reg.html
			$state.go('reg')
		}
})
