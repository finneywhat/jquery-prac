$(document).ready(function() {
  $(".clickable").click(function() {
    $("#kek").fadeToggle();
    $("#funny-haha").slideToggle();
  });
  $("#ponies-click").click(function() {
    $("#p-in-ponies").fadeIn();
  });
  $("#clickable-h3").click(function() {
    $("#lorem-ip-p, #lorem-ip-pic").slideToggle();
    // $("lorem-ip-pic").slideDown()
  });
});
