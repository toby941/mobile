var showRichId=0;
var advancedButtonCount=$("#advancedButtonCount").val();
document.getElementById("advancedButtonDiv").style.height="480px";
document.getElementById("box").style.height="480px";
function showRichAd(id){
  if(showRichId!=0){return;}
    $("#advancedButtonDiv").animate({top: '+'+(40+advancedButtonCount*39)+'px'},800);
    $("#richDiv"+id).animate({top: '+0px'},800,function(){});
        showRichId=id;
    document.getElementById("backDiv").style.display="";
 }

function buttonBackPage(){
  if(showRichId==0){return;}
   var richDiv = document.getElementsByName("richDiv");
      $("#richDiv"+showRichId).animate({top: '-500px'},800);
      $("#advancedButtonDiv").animate({top: '0px'}, 800);
      document.getElementById("backDiv").style.display="none";
      showRichId=0;
}
$(function(){
 $("#loading").fadeOut(function(){
 $("#box").fadeIn(function(){$("#advancedButtonDiv").animate({bottom: '0px'}, 800);});
   });
});
