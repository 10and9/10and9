$("li").hover(function(){
  var menu = $(this).attr('class');
  $(".circle--" + menu).removeClass("inactive").addClass("hover");
  $(".line--" + menu).removeClass("inactive").addClass("menu-hover");
  $(".menucircle--" + menu).removeClass("inactive").addClass("menu-circle-hover");

  $(this).click(function(){
    $('.circle.active, .line.menu-active, .menucircle.menu-circle-active').removeClass("active menu-active menu-circle-active");

    $('.circle--' + menu).removeClass("hover").addClass("active");
    $('.line--' + menu).removeClass("menu-hover").addClass("menu-active");
    $('.line--secondary--' + menu).removeClass("menu-hover").addClass("menu-active");
    $('.menucircle--' + menu).removeClass("menu-circle-hover").addClass("menu-circle-active");
    $('.menucircle--secondary--' + menu).removeClass("menu-circle-hover").addClass("menu-circle-active");
  });
}, function(){
     var menu = $(this).attr('class');
     $(".circle.hover").removeClass("hover").addClass("inactive");
     $(".line.menu-hover").removeClass("menu-hover").addClass("inactive");
     $(".menucircle.menu-circle-hover").removeClass("menu-circle-hover").addClass("inactive");
});


$(document).ready(function(){
    $('#project').mouseover(function(){
        $('#Red').css('fill','#FFFFFF');
    });
    $('#project').mouseout(function(){
        $('#Red').css('fill','#D81C54');
    });
});

$(document).ready(function(){
    $('#project').mouseover(function(){
        $('#Bullethole2').css('opacity','1');
        $('#Circle-Red').css('fill','#D81C54');
    });
    $('#project').mouseout(function(){
        $('#Bullethole2').css('opacity','0');
        $('#Circle-Red').css('fill','#D81C54');
    });
});

$(document).ready(function(){
    $('#web_projects').mouseover(function(){
        $('#Bullethole').css('opacity','1');
    });
    $('#web_projects').mouseout(function(){
        $('#Bullethole').css('opacity','0');
    });
});
