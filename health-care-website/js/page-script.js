/*========================================
    Lynxsia IT Solution
    Website: https://www.lynxsia.com
    Email: info@lynxsia.com
    Contact: +91-7275716753
    Developer: Mohd Fayeem
=========================================*/

/* Event For Tab Change active class */
$('.list-inline-item a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
    var theThis = $(this);
    $('.list-inline-item a').removeClass('active');
    theThis.addClass('active');
});
$(".list-inline-item").click(function (){
    $(".list-inline-item").each(function(){
        $(this).removeClass('active');
    });
    $(this).addClass('active');
});

/* Back To Top Button */
//Get the button:
mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/* Back To Top Button End */

/* Navigation Menus Fixed On Scroll */
$(document).ready(function() {
    $(window).scroll(function () {  
      console.log($(window).scrollTop())
      if ($(window).scrollTop() > 280) {
        $('#navigation-bar').addClass('fixed-top');
      }
      if ($(window).scrollTop() < 281) {
        $('#navigation-bar').removeClass('fixed-top');
      }    
    });
  });
  /* Navigation Menus Fixed On Scroll End */