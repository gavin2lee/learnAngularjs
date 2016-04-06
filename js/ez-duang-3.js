angular.module("ezstuff",[])
.directive("ezDuang",function(){
	return {
		restrict : "E",
		template : "<img src='image/duang.gif'>"
	};
});

//模拟引导启动过程
angular.element(document).ready(function(){
    //第一步：创建注入器并保存到根对象的data中
    var injector = angular.injector(["ng","ezstuff"]);
	angular.element(document).data("$injector",injector);
	
	//第二步：创建根作用域并保存到根对象的data中
	var rootScope = injector.get("$rootScope");
	angular.element(document).data("$rootScope",rootScope);
	
	//第三步：编译DOM树
	var compile = injector.get("$compile")
	compile(document)(rootScope);
});