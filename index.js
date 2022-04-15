// Animate logo
$(function() {
  $(".animate").on({

      mouseenter: function() {

        var loc = window.location.pathname;
        if (loc.includes("/overviews")) {
          $(".logo").attr("src", "../../Photos/Suprised_Logo.svg");
        } else if (loc.includes("Directory")) {
          $(".logo").attr("src", "../Photos/Suprised_Logo.svg");
        } else {
          $(".logo").attr("src", "Photos/Suprised_Logo.svg");
        }
      },

      mouseleave: function() {
        var loc = window.location.pathname;
        if (loc.includes("/overviews")) {
          $(".logo").attr("src", "../../Photos/Closed_Logo.svg");
        } else if (loc.includes("Directory")) {
          $(".logo").attr("src", "../Photos/Closed_Logo.svg");
        } else {
          $(".logo").attr("src", "Photos/Closed_Logo.svg");
        }
      },
  });
});
