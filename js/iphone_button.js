var showRichId=0;

function showRichAd(id){
  if(showRichId!=0){return;}
    $(".but").animate({top: '+880px'},800,function(){ });
    $("#richDiv"+id).animate({top: '+0px'},800,function(){})
        showRichId=id;
    document.getElementById("backDiv").style.display="";
 }

function buttonBackPage(){
  if(showRichId==0){return;}
   var richDiv = document.getElementsByName("richDiv");
      $("#richDiv"+showRichId).animate({top: '-500px'},800);
      $(".but").animate({top: "430px"}, 800);
      document.getElementById("backDiv").style.display="none";
      showRichId=0;
}
$(function(){
 $("#loading").fadeOut(function(){
 $("#box").fadeIn();
   });
});
document.getElementById("navigationDiv").style.top=(document.body.offsetHeight-50)+"px";
document.getElementById("box").style.height=document.body.offsetHeight+"px";