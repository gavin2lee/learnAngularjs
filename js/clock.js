//����DOM�����¼�
$(function(){
	//������ʱ��
	setInterval(function(){
		//ȡ��ǰʱ��
		var d = new Date();

		//ʹ��text()��������DOM������ı�����
		$("#clock").text(d.toString());

	},1000/*1000���봥��1��*/);
});
