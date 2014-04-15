$(document).ready(function(){
	var path = "./include/Home.html";
	$("#page_content").load(path);	
});

$("a").click(function(event){
	var path = "./include/" + event.target.id + ".html";
	$("#page_content").load(path);
});

