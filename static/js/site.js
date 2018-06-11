$( document ).ready(function() {
  // Set blur on image on mouse over.
  var hover_blur = $('.work-item');
  // Set blur on image on mouse over.
  hover_blur.mouseenter(function() {
      $(this).find('img').addClass('blur');
      $(this).find('.info-layer').show();
  });

  // On mouse leave remove blur.
  hover_blur.mouseleave(function() {
    var workImage = $(this).find('img');
    workImage.removeClass('blur');
    $(this).find('.info-layer').hide();
  });

  // On click remove blur and hover layer.
  hover_blur.click(function() {
    var workImage = $(this).find('img');
    workImage.removeClass('blur');
    $(this).find('.info-layer').hide();
  });
});