(function () {
  $(document).ready(function () {

    // bs4 scrollspy smooth
    $(".nav-item a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 400, function() {
          window.location.hash = hash;
        });
      }
    });

    // back to top button
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
  
    // starting page animations
    $('img, .circles').addClass('bounce-top');
    $('h3').addClass('bounce-left');

    $('img').hover(function(){
      $(this).addClass('vibrate-1');
    }, function(){
      $(this).removeClass('vibrate-1 bounce-top');
    });
    
  });
})();
