function addHeader()
{
	document.getElementById("header").innerHTML += "<h1>Summer Islamic Quiz</h1>";	
}
function addFooter()
{
	document.getElementById("footer").innerHTML += "<footer>Website developed by Wafaa Che Rose. Framework used : Skeleton</footer>";
}

$(document).ready(function(){
	$("#content1").hide();
	$("#topic1").click(function(){
		$("#content1").toggle();
	});
	
	$("#content2").hide();
	$("#topic2").click(function(){
		$("#content2").toggle();
	});
	
	$("#content3").hide();
	$("#topic3").click(function(){
		$("#content3").toggle();
	});
	
	$("#content4").hide();
	$("#topic4").click(function(){
		$("#content4").toggle();
	});
});