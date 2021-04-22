$(document).ready(function () {
  const mouseContainer = $(".section-mouse .info-box-head");
  const toggleButton = $(".toggle");

  $(".navigation-button").click(function () {
    $(".navigation-items").show();
  });

  $(".navigation button").click(function () {
    $(".navigation-items").hide();
  });

  // Click container
  $(".section-dropdown .info-box-head").click(function () {
    $(".section-dropdown .info-box-body").slideToggle("slow");
  });

  // Mouse container - slide down
  mouseContainer.mouseover(function () {
    mouseContainer.addClass("background");
    // $('.section-mouse .info-box-body').slideDown('slow');
  });

  // Mouse container - slide up
  mouseContainer.mouseleave(function () {
    mouseContainer.removeClass("background");
    // $('.section-mouse .info-box-body').slideUp('fast');
  });

  toggleButton.click(function () {
    $(".logo").toggleClass("color");
  });
});
