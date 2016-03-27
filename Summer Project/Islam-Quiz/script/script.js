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

$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(500, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                        $("nav a").removeClass("current");
                        $("nav a[href='"+newHash+"']").addClass("current");
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});