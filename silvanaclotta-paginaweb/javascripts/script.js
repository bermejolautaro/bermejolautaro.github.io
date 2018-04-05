//LIGHTBOX CONFIGURATION
lightbox.option({
  "resizeDuration": 0,
  "albumLabel": "Imagen %1 de %2",
  "imageFadeDuration": 100,
  "wrapAround": true
  //"disableScrolling": true
});

//SMOOTH SCROLLING
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

let navbar = document.getElementsByClassName("navbar")[0];
$(window).ready(function(){
  $(".slicknav_menu").addClass("navbar--normal");
})
//CAMBIAR COLOR DE FONDO DEL NAVBAR CUANDO SCROLLEAN
window.onscroll = function(){
  if(document.getElementsByTagName("HTML")[0].scrollTop > 10){
    navbar.classList.remove("navbar--normal");
    navbar.classList.add("navbar--dark");
    $(".slicknav_menu").removeClass("navbar--normal");
    $(".slicknav_menu").addClass("navbar--dark");
  }
  else{
    navbar.classList.add("navbar--normal");
    navbar.classList.remove("navbar--dark");
    $(".slicknav_menu").addClass("navbar--normal");
    $(".slicknav_menu").removeClass("navbar--dark");
  }
};

$(function(){
    $(".nav-list").slicknav({
      label: "",
      duration: 500,
      closeOnClick: true
    });
});
