$(document).ready(function () {
$(window).scroll(function () {
if ($(document).scrollTop() > 200) {
$(".navbar-fixed-top").addClass("scrolled");
} else {
$(".navbar-fixed-top").removeClass("scrolled");
}
});
});
