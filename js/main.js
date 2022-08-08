$( document ).ready(function() {

  // function closeOpenNavs() {
  //   var openDrops = document.querySelectorAll(".dropdown__trigger");

  //   for (var i = 0; i < openDrops.length; i++) {
  //     var openDropdown = openDrops[i];

  //     if (openDropdown.parentElement.classList.contains("js-open")) {
  //       openDropdown.parentElement.classList.remove("js-open");
  //     }
  //   }
  // }
  // document.addEventListener(
  //   "click",
  //   function (event) {
  //     if (!event.target.closest(".dropdown__trigger")) {
  //       closeOpenNavs();
  //     } else if (
  //       event.target.closest(".dropdown__trigger") &&
  //       event.target.parentElement.closest(".js-open")
  //     ) {
  //       event.target
  //         .closest(".dropdown__trigger")
  //         .parentElement.classList.remove("js-open");
  //     } else if (event.target.closest(".dropdown__trigger")) {
  //       closeOpenNavs();
  //       event.target
  //         .closest(".dropdown__trigger")
  //         .parentElement.classList.add("js-open");
  //     }
  //   },
  //   false
  // );

  let scrollpos = window.scrollY
  const header = document.querySelector(".header")
  const header_height = 10;

  const add_class_on_scroll = () => header.classList.remove("home-header")
  const remove_class_on_scroll = () => header.classList.add("home-header")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })

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
