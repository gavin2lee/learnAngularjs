angular.element(document).ready(function(){
	angular.injector(["ng"]).invoke(function($http){
		//将$http对象转成字符串显示出来
		var e = document.querySelector("#logger");
		angular.element(e).text($http.toString());
	});
});


//在ezstuff模块上登记一个服务ezHello
angular.module("ezstuff",[])
.provider("ezHello",function(){
	//$get方法是一个类工厂，返回服务的实例
	this.$get = function(){
		return "hello,world!";
	};
});

angular.element(document).ready(function(){
    //"ng",
	angular.injector(["ng","ezstuff"]).invoke(function(ezHello){
		//将ezHello实例对象转成字符串显示出来
		var e = document.querySelector("#ezHelloLogger");
		angular.element(e).text(ezHello);
	});
});
