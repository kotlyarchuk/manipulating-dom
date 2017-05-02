$(document).ready(function(){
  $(".subcontent").append(homeStructure);
  $(".home").addClass("active");

  $(".home").on("click", function(){
    console.dir(  $(".subcontent")[0] );
    $(".subcontent").empty();
    $("ul li").removeClass("active");
    $(this).toggleClass("active");
    $(".subcontent").append(homeStructure);
  });

  $(".contact").on("click", function(){
    $(".subcontent").empty();
    $("ul li").removeClass("active");
    $(this).toggleClass("active");
    $(".subcontent").append(contactStructure);
  });

  $(".menu").on("click", function(){
    $(".subcontent").empty();
    $("ul li").removeClass("active");
    $(this).toggleClass("active");
    $(".subcontent").append(menuStructure);
  });



});


var homeStructure = "<div class='img'>"+
  "<img src='http://lorempixel.com/400/200/food' />"+
"</div>"+
"<div class='title'>"+
  "<h2>Bora-Bora Restaurant is open</h2>"+
"</div>"+
"<div class='text'>"+
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"+
  "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"+
"</div>";

var contactStructure = "<div class='title'>"+
  "<h2>You can contact us there:</h2>"+
"</div>"+
"<div class='contact-list'>"+
  "<h3>Facebook</h3>"+
  "<p>Bora-Bora Facebook</p>"+
  "<h3>Telegram</h3>"+
  "<p>Bora-Bora Telegram</p>"+
  "<h3>Or we are waiting for you at Palm Beach Ave. 33 every day!</h3>"+
"</div>";

var menuStructure = "<div class='title'>"+
  "<h2>Our glorious menu:</h2>"+
"</div>"+
"<div class='menu'>"+
  "<div class='menu-block'>"+
    "<div class='menu-logo'>"+
      "<img src='http://lorempixel.com/100/100/food/1' />"+
    "</div>"+
    "<h3 class='menu-title'>WOW first super dish</h3>"+
    "<p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"+
  "</div>"+
  "<div class='menu-block'>"+
    "<div class='menu-logo'>"+
      "<img src='http://lorempixel.com/100/100/food/2' />"+
    "</div>"+
    "<h3 class='menu-title'>Ultra exclusive second sweet thing</h3>"+
    "<p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
  "</div>"+
  "<div class='menu-block'>"+
    "<div class='menu-logo'>"+
      "<img src='http://lorempixel.com/100/100/food/3' />"+
    "</div>"+
    "<h3 class='menu-title'>FINAL offer for extra eaters!</h3>"+
    "<p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
  "</div>"+
"</div>";
