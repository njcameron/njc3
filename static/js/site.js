$( document ).ready(function() {
  // Set blur on image on mouse over.
  let hover_blur = $('.work-item');

  // Set blur on image on mouse over.
  hover_blur.mouseenter(function() {
    let that = this;
    setTimeout(function(){
      $(that).find('img').addClass('blur');
    },250);

  });

  // On mouse leave remove blur.
  hover_blur.mouseleave(function() {
    let workImage = $(this).find('img');
    workImage.removeClass('blur');
  });

  // On click remove blur and hover layer.
  hover_blur.click(function() {
    let workImage = $(this).find('img');
    workImage.removeClass('blur');
    $(this).find('.layer').hide();
  });
});