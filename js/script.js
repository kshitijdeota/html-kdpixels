$(document).ready(function(){
    $('#open-box, #close-box').click(function(){
        $(".shot-overlay, .close-outside").toggle();
        $("body").toggleClass("noscroll");
    });
  $('.close-outside').click(function(){
        $(".shot-overlay, .close-outside").toggle();
        $("body").toggleClass("noscroll");
    });
});