var showRichId=0;
var advancedButtonCount=$("#advancedButtonCount").val();
  document.getElementById("advancedButtonDiv").style.height=document.body.offsetHeight+"px";
  document.getElementById("advancedButtonDiv").style.bottom = "25px";
  document.getElementById("box").style.height=document.body.offsetHeight+"px";
  var imglist = document.getElementsByName("picImgList");
  for(var i=0;i<imglist.length;i++){
    imglist[i].height=(document.body.offsetHeight-60);
    imglist[i].width=(document.body.offsetWidth-50);
  }
  
function showRichAd(id){
  if(showRichId!=0){return;}
    $("#advancedButtonDiv").animate({top: '+'+(60+advancedButtonCount*34)+'px'},1000,function(){ });
    $("#richDiv"+id).animate({top: '+0px'},1000,function(){})
        showRichId=id;
    document.getElementById("backDiv").style.display="";
 }

function buttonBackPage(){
  if(showRichId==0){return;}
   var richDiv = document.getElementsByName("richDiv");
      $("#richDiv"+showRichId).animate({top: '-500px'},1000);
      $("#advancedButtonDiv").animate({top: '0px'}, 1000);
      document.getElementById("backDiv").style.display="none";
      showRichId=0;
}
$(function(){
 $("#loading").fadeOut(function(){
 $("#box").fadeIn(function(){$("#advancedButtonDiv").animate({bottom: '0px'}, 800);});
   });
});

