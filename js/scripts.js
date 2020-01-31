jQuery(document).ready(function() {
  var btn = $(".totop");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("totop");
    } else {
      btn.removeClass("totop");
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

$(document).ready(function() {
  function blinklogo() {
    $("#logo").click();
  }

  $("#logo").click(function() {
    $("#logo")
      .fadeTo(100, 0.5)
      .fadeTo(100, 1, blinklogo);
  });
});

$(document).ready(function() {
  $('[data-type="proteinbar"]').hover(function() {
    $('[data-type="proteinbar"]').css("background", "blue");
  });
});

$(document).ready(function() {
  $('[data-type="mineralwater"]').hover(function() {
    $('[data-type="mineralwater"]').css("background", "green");
  });
});
