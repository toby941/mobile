var showRichId=0;
document.getElementById("navigationDiv").style.top=(document.body.offsetHeight)+"px";
document.getElementById("navigationDiv").style.bottom ="25px";
document.getElementById("box").style.height="100%";//window.screen.height+"px";
var imglist = document.getElementsByName("picImgList");
  for(var i=0;i<imglist.length;i++){
    imglist[i].height=(document.body.offsetHeight-60);
    imglist[i].width=(document.body.offsetWidth-50);
  }
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
      $(".but").animate({top: (document.body.offsetHeight)+"px"}, 800);
      document.getElementById("backDiv").style.display="none";
      showRichId=0;
}
$(function(){
 $("#loading").fadeOut(function(){
 $("#box").fadeIn();
   });
});
