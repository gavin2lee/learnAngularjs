angular.module("ezstuff",[])
.directive("ezDuang",function(){
	return {
		restrict : "E",
		template : "<img src='image/duang.gif'>"
	};
});

//ģ��������������
angular.element(document).ready(function(){
    //��һ��������ע���������浽�������data��
    var injector = angular.injector(["ng","ezstuff"]);
	angular.element(document).data("$injector",injector);
	
	//�ڶ����������������򲢱��浽�������data��
	var rootScope = injector.get("$rootScope");
	angular.element(document).data("$rootScope",rootScope);
	
	//������������DOM��
	var compile = injector.get("$compile")
	compile(document)(rootScope);
});