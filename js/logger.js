angular.element(document).ready(function(){
	angular.injector(["ng"]).invoke(function($http){
		//��$http����ת���ַ�����ʾ����
		var e = document.querySelector("#logger");
		angular.element(e).text($http.toString());
	});
});


//��ezstuffģ���ϵǼ�һ������ezHello
angular.module("ezstuff",[])
.provider("ezHello",function(){
	//$get������һ���๤�������ط����ʵ��
	this.$get = function(){
		return "hello,world!";
	};
});

angular.element(document).ready(function(){
    //"ng",
	angular.injector(["ng","ezstuff"]).invoke(function(ezHello){
		//��ezHelloʵ������ת���ַ�����ʾ����
		var e = document.querySelector("#ezHelloLogger");
		angular.element(e).text(ezHello);
	});
});
