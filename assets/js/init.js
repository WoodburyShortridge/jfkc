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

// shadow on link hover
$('.sliding').hover(function() {
  $(this).closest('.card').addClass('z-depth-4');
}, function() {
  // on mouseout
  $(this).closest('.card').removeClass('z-depth-4');
});

//scroll vars
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top + 75;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
//card highlights
function highlightCards() {
  $(window).scroll(function () {
      $('.card').each(function () {
          if (isScrolledIntoView(this) === true) {
              $(this).addClass('z-depth-4');
              $('h3', this).addClass('hover');
          }
          else {
            $(this).removeClass('z-depth-4');
            $('h3', this).removeClass('hover');
          }
      });
  });
};
//mobile only
$(window).resize(function() {
    if($(window).width() < 600) {
      highlightCards ();
    };
}).resize();

console.log("Hello world. Site by Woodbury Shortridge - whshortridge@gmail.com");
