function onHover() {
  $("#logo").attr("src", "Photos/Suprised_Logo.svg");
}

function offHover() {
  $("#logo").attr("src", "Photos/Closed_Logo.svg");
}


$(function(){
  $(".btn").on({
   mouseenter: function(){
    $("#logo").attr("src", "Photos/Suprised_Logo.svg");
  },
  mouseleave: function(){
    $("#logo").attr("src", "Photos/Closed_Logo.svg");
  }
  });
});

$(function(){
  $(".nav-item").on({
   mouseenter: function(){
    $("#logo").attr("src", "Photos/Suprised_Logo.svg");
  },
  mouseleave: function(){
    $("#logo").attr("src", "Photos/Closed_Logo.svg");
  }
  });
});
