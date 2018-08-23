$(document).ready(function(){
$("#B").click(function(){$("#text").css("font-weight","bold");});
$("#A").click(function(){$("#text").css("text-decoration","underline");});
$("#I").click(function(){$("#text").css("font-style","italic");});
$("#list").change(function(){
	var fam=$("#list").val();
    $("#text").css("font-family",fam);});

$("#fontsize").change(function(){var size= $("#fontsize").val();
	$("#text").css("font-size",size + "px" );});
});