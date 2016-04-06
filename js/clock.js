//监听DOM就绪事件
$(function(){
	//启动定时器
	setInterval(function(){
		//取当前时间
		var d = new Date();

		//使用text()方法更新DOM对象的文本内容
		$("#clock").text(d.toString());

	},1000/*1000毫秒触发1次*/);
});
