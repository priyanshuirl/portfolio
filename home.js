var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".item.first").slideToggle(100);
    $(".item.second").slideToggle(200);
    $(".item.third").slideToggle(300);
    $(".item.last").slideToggle(400);
    if (w >= 600) {
      $(".item.button").css("display", "block");
      $(".item.secondary").css("display", "block");
    } else {
      $(".item.button").slideToggle(500);
      $(".item.secondary").slideToggle(600);
    }
  });
  $(".item").click(function () {
    if (window.innerWidth < 590) {
      $(".item.first").slideToggle(100);
      $(".item.second").slideToggle(200);
      $(".item.third").slideToggle(300);
      $(".item.last").slideToggle(400);
      if (w >= 600) {
        $(".item.button").css("display", "block");
        $(".item.secondary").css("display", "block");
      } else {
        $(".item.button").slideToggle(500);
        $(".item.secondary").slideToggle(600);
      }
    }
  });
});
