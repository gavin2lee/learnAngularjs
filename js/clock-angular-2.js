var ezstuff = angular.module("ezstuff", []);//����ģ��ezstuff
ezstuff.directive("ezClock", function(){//��ģ����ע��ָ��ezClock���๤��
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

//sb����������window������
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
            //��ȡdata����ֵ����ñ�������ͨ��eval�õ���ֵ
			var sb = eval(attrs.data);

			//���DOMԪ������
			element.append("<div>name : " + sb.name + "</div>")
				.append("<div>gender : " + sb.gender + "</div>")
				.append("<div>age : " + sb.age + "</div>")
        }
    };

});