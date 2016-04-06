angular.element(document).ready(function(){
    setInterval(function(){
        var d = new Date();
        
        var tpl = document.querySelector("#clock");
        angular.element(tpl).text(d.toString());
    }, 1000);
});