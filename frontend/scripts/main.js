function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var items = document.querySelectorAll(".roadmaps li");
          
          // code for the isElementInViewport function
            
          function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
              if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
              }
            }
          }
            
          window.addEventListener("load", callbackFunc);
          window.addEventListener("scroll", callbackFunc);


function contentImages(){
  var $active = $('#content .active');
  var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : $('#content img')
  .not('.base').first();
  $next.css('z-index',2); //move images
  $active.fadeOut(1500, function(){
  $active.css('z-index',1).show().removeClass('active');
  $next.css('z-index',3).addClass('active');
  });

}

$(document).ready(function(){
$('#content img.base').clone().prependTo('#content');
$('#content img.base').last().removeClass('base').addClass('active');
$('#content img').show();
  setInterval('contentImages()', 3000);
});