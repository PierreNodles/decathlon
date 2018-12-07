jQuery(function($) {

  //functions



  // Jumbotro full Height
  function setHeight() {
    windowHeight = $(window).innerHeight();
    if ($(window).width() < 720) {
      windowHeight = $(window).innerHeight() * 1.2;
    }
    $('.dp_jumbotron').css('min-height', windowHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

  function backgroundHeight() {
    var bH = $(document).height();
    $('#dp_background').css('min-height', bH);;
  }
  $(window).on('scroll resize', backgroundHeight);
  backgroundHeight();


  // Autoplay video on click
  $('#play-video, .video figure .fas').on('click', function(ev) {
    $(this).parent().fadeOut();
    thevid = $('#video');
    $("#video")[0].src += "?autoplay=1";
  });





  //**************************
  //******* FUNCTION ANIMATION
  //******* CRUSH 500
  //**************************

  var $dp_scroll = $('.dp_scroll');
  var $window = $(window);
  var already_done_regular = false;
  var isDone = false;

  var reset_time = 600;
  var scroll_down_time = 3000;
  var fade_out = 1200;
  var fade_in = 800;
  var reinitialize = 2000;


  if ( $window.width() < 768 ) {
    reset_time = 1200;
    var scroll_down_time = 4000;
    var fade_out = 1600;
    var fade_in = 1200;
  }

  var is_done = scroll_down_time;
  var last_fade_in = fade_out;
  var reinitialize_time_out = fade_in*3;




  function crush500() {

    $('html, body').animate({'scrollTop': $('#dp_motif-left').offset().top - 150}, reset_time);


    $('.crush500-text').fadeTo(reset_time, 0);

    $('.crush500-text_2').fadeTo(reset_time, 0);

    $('.crush500_4 img').fadeTo(reset_time, 0);


    setTimeout(function(){


      $('html, body').animate({'scrollTop': $('.motif-right').offset().top - 150}, scroll_down_time);

      $('.crush500_1 img').fadeTo(fade_out, 0);
      $('.crush500_2').fadeIn(fade_in);

      setTimeout(function(){
        $('.crush500_2').fadeOut(fade_out);
        $('.crush500_3, #dp_motif-right').fadeIn(fade_in);
      }, fade_in);

      setTimeout(function(){
        $('.crush500_3').fadeOut(fade_out);
        $('.crush500_4 img').fadeTo(last_fade_in, 1);
      }, fade_in*2);


      setTimeout(function(){
        // Réapparition de tous les éléments disparus
        $('.crush500_1 img').fadeTo(reinitialize, 1);
        $('.crush500-text_2').fadeIn(reinitialize);
        $('.crush500-text_2').fadeTo(reinitialize, 1);
        $('.dp_link-row').fadeTo(reinitialize, 1);
        $('.crush500-text').fadeTo(reinitialize, 1);


      }, reinitialize_time_out);

      setTimeout(function(){
        isDone = true;
      }, is_done)

    }, reset_time);



  }

  //**************************
  //******* ANIMATION CRUSH500
  //******* ON CLICK
  //**************************


  $dp_scroll.click(function() {

    crush500();

  });


  //**************************
  //******* ANIMATION CRUSH500
  //******* ON SCROLL
  //**************************


  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height - 200);

    $.each($dp_scroll, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) && (already_done_regular == false)) {
        already_done_regular = true;
        crush500();


      }
    });
  }


  ////////////////////////// REWIND


  //**************************
  //******* FUNCTION ANIMATION
  //******* CRUSH 500
  //**************************

  var already_done_rewind = false;


  function crush500_rewind() {

    $('html, body').animate({'scrollTop': $('.crush500_4').offset().top - 150}, 600);


    $('.crush500-text').fadeTo(600, 0);

    $('.crush500-text_2').fadeTo(600, 0);

    $('.crush500_1 img').fadeTo(600, 0);


    setTimeout(function(){


      $('html, body').animate({'scrollTop': $('#dp_motif-left').offset().top - 150}, 3000);

      $('.crush500_4 img').fadeTo(1200, 0);
      $('.crush500_3').fadeIn(800);

      setTimeout(function(){
        $('.crush500_3').fadeOut(1200);
        $('.crush500_2').fadeIn(800);
      }, 800);

      setTimeout(function(){
        $('.crush500_2').fadeOut(1200);
        $('.crush500_1 img').fadeTo(1200, 1);
      }, 1600);


      setTimeout(function(){
        // Réapparition de tous les éléments disparus
        $('.crush500_1 img').fadeTo(2000, 1);
        $('.crush500-text_2').fadeIn(2000);
        $('.crush500-text_2').fadeTo(2000, 1);
        $('.dp_link-row').fadeTo(2000, 1);
        $('.crush500-text').fadeTo(2000, 1);
        $('.crush500_4 img').fadeTo(2000, 1);

      }, 2400);

    }, 600);



  }

  //**************************
  //* ANIMATION CRUSH500 REWIND
  //* ON SCROLL
  //**************************

  var $dp_scroll = $('.dp_scroll');

  $window.on('scroll resize', check_if_in_view_rewind);

  function check_if_in_view_rewind() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop() + 100;
    var window_bottom_position = (window_top_position + 450);

    $.each($dp_scroll, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;


      var element_bottom_position = (element_top_position + element_height);
      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position) && (already_done_rewind == false) && (isDone == true) && ( $window.width() > 768 )) {
        already_done_rewind = true;
        crush500_rewind();

      }
    });
  }






  // END JQUERY
});
