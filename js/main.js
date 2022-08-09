$( document ).ready(function() {
  $(".scroll-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".info").offset().top},
        'slow');
    });

    if(window.matchMedia('(max-width: 992px)').matches){
      $('.has-sub-menu').click(function() {
        $(this).toggleClass('menu-open')
      })
      $(document).on("click", function(event){
        var $trigger = $(".has-sub-menu");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".has-sub-menu").removeClass("menu-open");
        }            
       });
    } else {
      $('.has-sub-menu').hover(function() {
        $(this).addClass('menu-open')
      },function() {
        $(this).removeClass('menu-open')
      })
    }

    $(document).on('click', '.hamburger', function() {
      $('.navbar').toggleClass('active');
      $('.hamburger').toggleClass('active');
    })
});
