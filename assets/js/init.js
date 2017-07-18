//match height columns
$('.head-col').matchHeight();
$('.card-col').matchHeight();
$('.text-col').matchHeight();
//external links
$("a[href^='http://']").attr("target","_blank");
$("a[href^='https://']").attr("target","_blank");
//back to top
var offset=300,
scrollDuration=300;
    $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        //$('.top').fadeIn(250);
        $('.top').removeClass("scale-out").addClass("scale-in");
        } else {
	//$('.top').fadeOut(250);
  $('.top').removeClass('scale-in').addClass("scale-out");
	}
});
//smooth animation
$('.top').click(function(event) {
event.preventDefault();
    $('html, body').animate({
    scrollTop: 0}, scrollDuration);
 })

//scroll vars
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top -150;
    var elemBottom = elemTop + $(elem).height() +250;
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
//card highlights mobile
function highlightCards() {
  $(window).scroll(function () {
      $('.sliding').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('hover');
              $(this).closest('.card').addClass('z-depth-4');
          }
          else {
            $(this).removeClass('hover');
            $(this).closest('.card').removeClass('z-depth-4');
          }
      });
  });
};
// desktop shadow on link hover
function hoverCards() {
  $('.sliding').hover(function() {
    $(this).addClass('hover');
    $(this).closest('.card').addClass('z-depth-4');
  }, function() {
    // on mouseout
    $(this).removeClass('hover');
    $(this).closest('.card').removeClass('z-depth-4');
  });
};

//mobile vs desktop
$(window).resize(function() {
    if($(window).width() < 600) {
      highlightCards ();
    } else {
      hoverCards();
    };
}).resize();

console.log("Hello world. Site by Woodbury Shortridge - whshortridge@gmail.com");
