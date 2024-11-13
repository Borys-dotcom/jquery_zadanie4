$(document).ready(function() {
    let allSpans = $('span');
    
    allSpans.each(function(){
        $(this).addClass('sign');
    });

    let allHeaders = $('.item');

    allHeaders.each(function(){

        $(this).click(function(){
            if ($(this).children().text() === "+")
                $(this).children().text('-');
            else  $(this).children().text('+');
            $(this).next().slideToggle(500);
        });

    });

    allTexts = $('.text');

    allTexts.each(function(){
        
        $(this).attr('style', 'display: none');

    });

});