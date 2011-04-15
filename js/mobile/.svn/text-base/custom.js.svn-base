$(document).ready(function() {


if ($("#_img").size() > 0) {
    $("#_img").swipe(function(evt, data) {
        $('#_img').attr("src", "/images/phone/iphone1.jpg");
    });
}    
    
    $('.ui-footer').css('position', 'absolute');
    
    
    $(document).bind('pageshow', function(event, ui) {
        $('.ui-footer').css('position', 'absolute');
        bindImg();
        slides();
    });
    $('.photoview').live('pagebeforehide', function() {
        $.fixedToolbars.hide(true);
    }).live('pageshow', function() {
        $.fixedToolbars.show();
    }).live('swipeleft', function() {
        $(this).next().find('a.next').click();
    }).live('swiperight', function() {
        $(this).next().find('a.prev').click();
    });
    $('.photoview img').live('mousedown touchstart', function(event) {
        //  event.preventDefault();
    });
    
    
});
function nextImg() {
    $.mobile.changePage("/images/phone/iphone1.jpg");
}

function bindImg() {
        $("#prev").click(function() {
            var currentId = $("#show").find("img").attr("id");
            var nextId = ++currentId;
            if (nextId > 5) {
                nextId = 1;
            }
            $("#show").find("img").fadeOut(500, function() {
                $("#show").empty().append($("#" + nextId).clone());
                
            });
        });
}
function slides(){
    if($('#slides').size()>0){

     $('#slides').slides({
                    preload: true,
                    preloadImage: 'images/loading.gif',
                    play: 5000,
                    pause: 2500,
                   generateNextPrev: false,
                    hoverPause: true,
                    pagination:true,
                    animationStart: function(current) {
                        $('.caption').animate({
                            bottom: -35
                        }, 100);
                        if (window.console && console.log) {
                            // example return of current slide number
                            console.log('animationStart on slide: ', current);
                        };
                                },
                    animationComplete: function(current) {
                        $('.caption').animate({
                            bottom: 0
                        }, 200);
                        if (window.console && console.log) {
                            // example return of current slide number
                            console.log('animationComplete on slide: ', current);
                        };
                                },
                    slidesLoaded: function() {
                        $('.caption').animate({
                            bottom: 0
                        }, 200);
                    }
                });
        }
    
}
