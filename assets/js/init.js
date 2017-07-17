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

/*
//Fix jekyll lowercase Mi.mu
$("h3.red-text, h3.grey-text, a.collection-item, a.breadcrumb").each(function() {
    var text = $(this).text();
    text = text.replace("Mi.mu", "Mi.Mu");
    $(this).text(text);
});
*/

// shadow on link hover
$('.sliding').hover(function() {
  $(this).closest('.card').addClass('z-depth-4');
}, function() {
  // on mouseout
  $(this).closest('.card').removeClass('z-depth-4');
});

console.log("Hello world. Site by Woodbury Shortridge - whshortridge@gmail.com");
