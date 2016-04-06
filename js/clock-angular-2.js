var ezstuff = angular.module("ezstuff", []);//创建模块ezstuff
ezstuff.directive("ezClock", function(){//在模块上注册指令ezClock的类工厂
    return {
        restrict : "E",
        replace : true,
        template : "<div class='clock'></div>",
        link : function(scope, element, sttrs){
            setInterval(function(){
                var d = new Date();
                element.text(d.toString());
            }, 1000);
            
        }
        
    };
});

ezstuff.directive("ezShow", function(){
    return {
        restrict : "E",
        replace : true,
        template : "<div><B>Show Me Here!</B></div>"
    };
    
});

//sb变量建立在window对象上
var sb = {
	name : "somebody",
	gender : "male",
	age : 28
};

ezstuff.directive("ezNamecard", function(){
    return {
        restrict : "E",
        replace : true,
        template : "<div class='namecard'></div>",
        link: function(scope, element, attrs){
            //读取data属性值，获得变量名，通过eval得到其值
			var sb = eval(attrs.data);

			//填充DOM元素内容
			element.append("<div>name : " + sb.name + "</div>")
				.append("<div>gender : " + sb.gender + "</div>")
				.append("<div>age : " + sb.age + "</div>")
        }
    };

});