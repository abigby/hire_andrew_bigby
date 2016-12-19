$(document).ready(function(){
  var dataOutput = [];
  var htmlOutput;

  $.ajax({
    url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) {

      $(data.feed.entry).each(function(index, value){

        $(value).each(function(index, value){
          htmlOutput = '<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-50">';
          htmlOutput += '<div class="card-content">';
          htmlOutput += '<div class="cover">';
          htmlOutput += '<span class="play-icon">';
          htmlOutput += '<i class="fa fa-play-circle-o fa-3x" aria-hidden="true">';
          htmlOutput += '</i>';
          htmlOutput += '</span>';
          htmlOutput += '<div class="cover-image-container">';
          htmlOutput += '<div class="cover-outer-align">';
          htmlOutput += '<div class="cover-inner-align">';
          htmlOutput += '<img alt="'+ value['im:name'].label +'" class="cover-image img-responsive center-block" data-cover-large="' + value['im:image'][1].label + '" data-cover-small="' + value['im:image'][0].label + '" src="'+ value['im:image'][2].label +'" aria-hidden="true">';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '<a class="card-click-target" href="'+ value.link.attributes.href +'" aria-label="'+ value['im:name'].label +'">';
          htmlOutput += '<span class="movies preordered-overlay-container id-preordered-overlay-container" style="display:none">';
          htmlOutput += '<span class="preordered-label">Pre-ordered</span></span>';
          htmlOutput += '<span class="preview-overlay-container"  data-docid="' + value.id.label + '"></span>';
          htmlOutput += '</a>';
          htmlOutput += '</div>';

          htmlOutput += '<div class="details">';
          htmlOutput += '<div class="row">';
          htmlOutput += '<div class="col-xs-9">';
          htmlOutput += '<div class="row">';
          htmlOutput += '<div class="col-xs-12">';
          htmlOutput += '<a class="card-click-target" href="'+ value.link.attributes.href +'" aria-hidden="true" tabindex="-1">';
          htmlOutput += '</a>';
          htmlOutput += '<a class="title" href="'+ value.link.attributes.href +'" title="'+ value['im:name'].label +'" aria-hidden="true" tabindex="-1">' + value['im:artist'].label + '';
          htmlOutput += '<span class="paragraph-end">';
          htmlOutput += '</span>';
          htmlOutput += '</a>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '<div class="subtitle-container">';
          htmlOutput += '<div class="row">';
          htmlOutput += '<div class="col-xs-9">';
          htmlOutput += '<a class="subtitle" href="'+ value['im:artist'].label +'" title="'+ value['im:artist'].label +'">' + value['im:artist'].label +'';
          htmlOutput += '</a>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '<div class="col-xs-3">';
          htmlOutput += '<span class="price-container">';
          htmlOutput += '<span class="paragraph-end">';
          htmlOutput += '</span>';
          htmlOutput += '<span class="music is-price-tag buy-button-container is_not_aquired_or_preordered" data-doc-fetch-skip-cache="0" data-doc-fetch-vouchers="0" data-docid="'+ value.id.label +'">';
          htmlOutput += '<span class="display-price pull-right">';
          htmlOutput += '<i class="fa fa-ellipsis-v" aria-hidden="true">';
          htmlOutput += '</i>';
          htmlOutput += '</span>';
          htmlOutput += '</span>';
          htmlOutput += '</span>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';

          htmlOutput += '<ul class="feed__social__list">';
          htmlOutput += '<li data-share="facebook" class="feed__social__item icon-facebook">';
          htmlOutput += '<span class="feed__social__item__span"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></span>';
          htmlOutput += '<a class="feed__social__item__link" target="_blank"></a></li>';

          htmlOutput += '<li data-share="twitter" class="feed__social__item icon-twitter">';
          htmlOutput += '<span class="feed__social__item__span"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></span>';
          htmlOutput += '<a class="feed__social__item__link" target="_blank"></a></li>';

          htmlOutput += '<li data-share="Instagram" class="feed__social__item icon-instagram">';
          htmlOutput += '<span class="feed__social__item__span"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></span>';
          htmlOutput += '<a class="feed__social__item__link" target="_blank"></a></li>';

          htmlOutput += '<li data-share="gplus" class="feed__social__item icon-gplus">';
          htmlOutput += '<span class="feed__social__item__span"><i class="fa fa-google-plus-official fa-2x" aria-hidden="true"></i></span>';
          htmlOutput += '<a class="feed__social__item__link" target="_blank"></a></li>';

          htmlOutput += '<li data-share="gplus" class="feed__social__item icon-close">';
          htmlOutput += '<span class="feed__social__item__span"> Close x</span>';
          htmlOutput += '<a class="feed__social__item__link" target="_blank"></a></li>';

          htmlOutput += '</ul>';

          htmlOutput += '</div>';
          htmlOutput += '</div>';
          htmlOutput += '</div>';

          dataOutput.push(htmlOutput);
          // $('#jsoned').append(htmlOutput);
        });

      }); //END OF ARRAYS

      //RENDER HTML OUTPUT TO DOM
      // $('#jsoned').append(htmlOutput);
      // console.log(dataOutput);


    }

  }).done(function() {
      $('#jsoned').append(dataOutput);
      theEvents();
    })
    .fail(function() {
      console.log( "AJAX/Output Failed" );
    })
    .always(function() {
      console.log( "Data Loaded Successfully" );
    });

    function theEvents() {
      $('body').on('click','.display-price', function(){
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
});
