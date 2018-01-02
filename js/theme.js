$(document ).ready(function() {

    window.onload = function () {
        $(".page-preload").fadeOut( 1600, "linear" );
        $(".wrapper").fadeIn( 1600 );
    };
    //load page
  
    var listImg = ["img/man-02.png","img/man-02.png","img/man-03.png","img/man-04.png","img/man-05.png"];
    setInterval(function(){
        var itemImg = listImg[Math.floor(Math.random()*listImg.length)];
        var imgSource = $('.banner__human-auto img');
        if (imgSource.attr('src') === itemImg) {
            itemImg = listImg[Math.floor(Math.random()*listImg.length)];
            imgSource.attr('src',itemImg);
        } else {
            imgSource.attr('src',itemImg);
        }
    }, 3000);

    new WOW().init();

});