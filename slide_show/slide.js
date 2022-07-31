$(document).ready(function(){
    slide('.ge');

});

function slide(slide){
    // $(slide).find('.photo').hide();
    setInterval(function (){
        $(slide).find('.show').hide();
        var next= $(slide).find('.show').next();
        $(slide).find('.show').removeClass('show');
        $(next).addClass('show').show();
        if(!$(next).hasClass('show')){
            $(slide).find('.photo').first().addClass("show").show();
   
        }
    },20000);

}

$('.next').click(function(){
    
        $(slide).find('.show').hide();
        var next= $(slide).find('.show').next();
        $(slide).find('.show').removeClass('show');
        $(next).addClass('show').show();
        if(!$(next).hasClass('show')){
            $(slide).find('.photo').first().addClass("show").show();
   
        }
   

});

$('.prev').click(function(){
    
    $(slide).find('.show').hide();
    var next= $(slide).find('.show').prev();
    $(slide).find('.show').removeClass('show');
    $(next).addClass('show').show();
    if(!$(next).hasClass('show')){
        $(slide).find('.photo').last().addClass("show").show();

    }


});
