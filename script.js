$(document).ready(function() {

  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    //console.log($(window).scrollTop())
    if ($(window).width() < 751) {
      $('#navbar').removeClass('navbar-fixed');
      $('#placebar').removeClass('placebar-block');
    }
    else if ($(window).width() > 751 && $(window).width() < 1008) { // ONE more than my target width, minus 17px for the scrollbar.
      if ($(window).scrollTop() > 292) {
        $('#navbar').addClass('navbar-fixed');
        $('#placebar').addClass('placebar-block');
      }
      if ($(window).scrollTop() < 293) {
        $('#navbar').removeClass('navbar-fixed');
        $('#placebar').removeClass('placebar-block');
      }
    }
    else if ($(window).width() > 1008 && $(window).width() < 1202) { // ONE more than my target width, minus 17px for the scrollbar.
      if ($(window).scrollTop() > 341) {
        $('#navbar').addClass('navbar-fixed');
        $('#placebar').addClass('placebar-block');
      }
      if ($(window).scrollTop() < 342) {
        $('#navbar').removeClass('navbar-fixed');
        $('#placebar').removeClass('placebar-block');
      }
    }
    else {
      if ($(window).scrollTop() > 389) {
        $('#navbar').addClass('navbar-fixed');
        $('#placebar').addClass('placebar-block');
      }
      if ($(window).scrollTop() < 390) {
        $('#navbar').removeClass('navbar-fixed');
        $('#placebar').removeClass('placebar-block');
      }
    }

    if($(window).scrollTop() + $(window).height() > $(document).height() - 125) {
       $('#social-buttons').addClass('social-buttons-off');
    }

    if($(window).scrollTop() + $(window).height() < $(document).height() - 125) {
      $('#social-buttons').removeClass('social-buttons-off');
    }
  });
});
