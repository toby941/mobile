function showPage(url,id){
  if(eval("taobaoShowState"+id)!="0"){return;}
    document.getElementById("iframe" + id).src = url;
    $("#iframeDiv" + id).ready(function() {
        $("#iframeDiv" + id).fadeIn(1000);
    });
    document.getElementById("backDiv").style.display = "none";
    document.getElementById("taobaoListDiv" + id).style.display = "none";
    document.getElementById("iframe" + id).style.width = document.body.offsetWidth + "px";
  //  if (document.getElementById("iframe" + id).contentDocument) {
  //      document.getElementById("box").style.height = document.getElementById("iframe" + id).contentDocument.body.offsetHeight;
  //  }
  //  else {
  //      document.getElementById("box").style.height = document.frames["iframe" + id].document.body.scrollHeight;
   // }
    document.getElementById("box").style.height = (1000-document.body.offsetWidth)*2.1+"px";
    if (document.getElementById("navigationDiv")) {
        document.getElementById("navigationDiv").style.display = "none";
    }
    else {
        document.getElementById("advancedButtonDiv").style.display = "none";
    }
    eval("taobaoShowState"+id+"='1'");;
}

function backPage(id) {
     if(eval("taobaoShowState"+id)=="0"){return;}
     eval("taobaoShowState"+id+"='0'");
     window.location.href=window.location.href;
    //document.getElementById("backDiv").style.display="";
    //document.getElementById("iframeDiv"+id).style.display="none";
    //document.getElementById("taobaoListDiv"+id).style.display="";
   // document.getElementById("box").style.height=document.body.offsetHeight+"px";
   // if(document.getElementById("navigationDiv")){
   // document.getElementById("navigationDiv").style.display="";
    //}else{
   // document.getElementById("advancedButtonDiv").style.display="";
   // }
       
}
