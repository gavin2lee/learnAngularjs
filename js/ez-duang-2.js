angular.module("ezstuff",[])
.directive("ezDuang",function(){
	return {
		restrict : "E",
		template : "<img src='image/duang.gif'>"
	};
});

angular.element(document).ready(function(){
    var btn = document.querySelector("#bootstrap");
    angular.element(btn).on("click", function(){
        angular.bootstrap(document, ["ezstuff"]);
    });
});