jQuery(document).ready(function($){

  $('.contenthalf .linebtn').click(function(){

    $(this).prev('div').toggleClass('show_all_thecontenthalf');

    if ($(this).text() == "Lees verder")
     $(this).text("Laat minder zien ")
  else
     $(this).text("Lees verder");

    return false;
  });


});
