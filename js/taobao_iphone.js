function showPage(url,id){
  if(eval("taobaoShowState"+id)!="0"){return;}
   // document.getElementById("mframe").src=url;
    $("#iframe"+id).attr("src",url).load(function(){
     // document.getElementById("box").style.height=document.getElementById("mframe").contentWindow.document.body.scrollHeight;
    });
    $("#iframeDiv"+id).ready(function(){
       $("#iframeDiv"+id).fadeIn(800);
   });
   
    document.getElementById("backDiv").style.display="none";
    document.getElementById("taobaoListDiv"+id).style.display="none";
    document.getElementById("iframeDiv"+id).style.width=document.body.offsetWidth+"px";
    //if (document.getElementById("iframe"+id).contentDocument) {
     // document.getElementById("box").style.height = document.getElementById("iframe"+id).contentDocument.body.offsetHeight;
   // }else{
   //   document.getElementById("box").style.height = document.frames["iframe"+id].document.body.scrollHeight;  
 //   }
    document.getElementById("box").style.height="1450px";
    if(document.getElementById("navigationDiv")){
    document.getElementById("navigationDiv").style.display="none";
    }else{
    document.getElementById("advancedButtonDiv").style.display="none";
    }
    eval("taobaoShowState"+id+"='1'");
  }
  

function backPage(id){
    if(eval("taobaoShowState"+id)=="0"){return;}
    document.getElementById("backDiv").style.display="";
    document.getElementById("iframeDiv"+id).style.display="none";
    document.getElementById("taobaoListDiv"+id).style.display="";
    document.getElementById("box").style.height="480px";
    if(document.getElementById("navigationDiv")){
    document.getElementById("navigationDiv").style.display="";}else{
    document.getElementById("advancedButtonDiv").style.display="";}
    eval("taobaoShowState"+id+"='0'");
  }
