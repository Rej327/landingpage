var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".numb").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2500,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

function myFunction() {
  var element = document.getElementById("navbar-id");
  element.classList.toggle("show");
}

$(document).ready(function () {
  var scroll = $.cookie("scroll");
  if (scroll) {
    scrollToID(scroll, 0);
    $.removeCookie("scroll");
  }

  $(".navbar a").click(function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    var href = $(this).attr("href");
    if (href === "#") {
      scrollToID(id, 0);
    } else {
      $.cookie("scroll", id);
      window.location.href = href;
    }
  });

  function scrollToID(id, speed) {
    var offSet = 105;
    var obj = $("#" + id);
    if (obj.length) {
      var offs = obj.offset();
      var targetOffset = offs.top - offSet;
      $("html,body").animate({ scrollTop: targetOffset }, speed);
    }
  }
});
