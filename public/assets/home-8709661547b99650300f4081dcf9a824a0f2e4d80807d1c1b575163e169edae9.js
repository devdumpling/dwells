$(document).ready(function(){$("#web").hide(),$("#art").hide(),$("#writing").hide(),$(".nav_head").click(function(){$(this).fadeTo("slow",1),$(this).siblings(".nav_head").fadeTo("slow",.15),$("#splash_photo").parent().slideUp();var t="#"+$(this).attr("id").split("_",1);$(this).siblings(".row-fluid").children().fadeOut("slow"),$(this).siblings(".row-fluid").children(t).is(":visible")?$(this).siblings(".nav_head").fadeTo("slow",1):$(this).siblings(".row-fluid").children(t).fadeIn("slow")})});