$(function(){

  $('.carousel').carousel({
  interval: 2000
  });

  $('[data-toggle="tooltip"]').tooltip()

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;


      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });



});
