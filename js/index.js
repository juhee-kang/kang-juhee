
//profile click event
function profileToggle(){
    const toggleProfile = document.querySelector('.contact');
    toggleProfile.classList.toggle('active');
}



$(document).ready(function(){

    var wh = $(window).height();
    var page3 = wh + $('.me').height();
    var page4 = page3 + $('.redesign').height();
    var page5 = page4 + $('.skillStudy').height();
    
    //header nav click scrolltop event
    $('nav .page1').click(function(){
        $('html,body').animate({
            scrollTop: 0
        });
    });
    $('nav .page2').click(function(){
        $('html,body').animate({
            scrollTop: wh + 50
        });
    });
    $('nav .page3').click(function(){
        $('html,body').animate({
            scrollTop: page3 + 100
        });
    });
    $('nav .page4').click(function(){
        $('html,body').animate({
            scrollTop: page4 + 200
        });
    });
    $('nav .page5').click(function(){
        $('html,body').animate({
            scrollTop: page5
        });
    });

    //redesign click event
    //more close btn
    $('.view').each(function(index){
       $(this).attr('data-index',index);
    });

    $('.more').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){

        var m = $(this).attr('data-index');

        $('.view[data-index!='+m+']').animate({
            top: -250
        },500);
        $('.view[data-index='+m+']').animate({
            top: 0
        },500);

    });

    $('.close').click(function(){
        $('.view').animate({
            top: -250
        },500);
    });

})//end