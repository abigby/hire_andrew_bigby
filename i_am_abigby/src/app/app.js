$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();

    theEvents();
});


function theEvents() {
  $('body').on('click','.menu-container', function(){
    $('.feed__social__list').css({"display":"none"});

    $(this).parentsUntil('.col-xs-6').next('.feed__social__list').css({
      "display":"block"
    });
  });

  $('body').on('click','.icon-close', function(){
    $('.feed__social__list').css({
      "display":"none"
    });
  });
}
