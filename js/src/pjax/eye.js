// build time:Fri Jul 26 2019 08:15:07 GMT+0800 (GMT+08:00)
function eye(){var o="253px";var c=false;$(".eye .eye2").click(function(){if(c==false){$(".eye .eye1").animate({width:o,opacity:"show"},{duration:500,easing:"easeOutBounce",complete:function(){}});c=true}else{$(".eye .eye1").animate({width:"0px",opacity:"hide"},{duration:500,easing:"easeOutBounce",complete:function(){}});c=false}});$(".eye ul li").click(function(){$(".eye .eye1").velocity("stop").velocity({width:0},{display:"none"});c=false;$color=$(this).css("background-color");$(".eye .eye1").css("background",$color);$("#canvas").css("background",$color);$("article").css("background",$color);var o=$(this).css("background-color");if(o.indexOf("rgb(50, 50, 50)")>=0){$("p").css({color:"#999"});$("a").css({color:"#FF99CC"});$("h1 a").css({color:"#FFFF66"});$("h2 a").css({color:"#FFFF66"});$("h3 a").css({color:"#FFFF66"});$("h4 a").css({color:"#FFFF66"});$("h1").css({color:"#FFFF66"});$("h2").css({color:"#FFFF66"});$("h3").css({color:"#FFFF66"});$("h4").css({color:"#FFFF66"})}else{$("p").css({color:"#333"});$("a:not(.social-share-icon)").css({color:"#555"});$("p a").css({color:"#0593d3"});$("h1").css({color:"#555"});$("h2").css({color:"#555"});$("h3").css({color:"#555"});$(".sidebar a ").css({color:"#999"});$(".header_left a ").css({color:"#999"})}})}eye();
//rebuild by neat 