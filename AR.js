function fontstyle(){

	document.getElementById("mytext").style.fontWeight='bold';}
function font(){document.getElementById("mytext").style.fontStyle='italic';}
function underline(){document.getElementById("mytext").style.textDecoration='underline';}
function fonttype(){
var selectedFont = document.getElementById("listl").value;
document.getElementById("mytext").style.fontFamily = selectedFont;


}
function fontsize(){
	var milan =document.getElementById("fontsize").value;
	document.getElementById("mytext").style.fontSize=milan;
}

