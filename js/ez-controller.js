var ezControllerClass = function($scope){
    $scope.vm = {
        sb : {
            name : "Jason Stantham",
			gender : "male",
			age : 48,
			career : "actor",
			photo : "image/Jason-Stantham.jpg"
            
        },
        shuffle : function(){
				var repo = [
					{name:"Jason Stantham",gender:"male",age:48,career:"actor",photo:"image/Jason-Stantham.jpg"},
					{name:"Jessica Alba",gender:"female",age:32,career:"actress",photo:"image/Jessica Alba.jpg"},
					{name:"Nicolas Cage",gender:"male",age:53,career:"actor",photo:"image/Nicolas Cage.jpg"},
					{name:"殖蚗啋",gender:"male",age:48,career:"independent journalist",photo:"image/殖蚗啋.jpg"},
					{name:"Sheetal Sheth",gender:"female",age:36,career:"actress",photo:"image/Sheetal Sheth.jpg"},
					{name:"Barack Obama",gender:"male",age:58,career:"president",photo:"image/Barack Obama.jpg"},
					{name:"圾抖忘忱我技我把 圾抖忘忱我技我把抉志我折 妤批找我扶",gender:"male",age:63,career:"president",photo:"image/圾抖忘忱我技我把 圾抖忘忱我技我把抉志我折 妤批找我扶.jpg"}
				];
				var idx = Math.floor(Math.random()*repo.length);
				$scope.vm.sb = repo[idx];
		}
    };
};

var ezstuff = angular.module("ezstuff",[]);
ezstuff.controller("ezController", ezControllerClass);