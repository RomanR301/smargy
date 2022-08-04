function closeOpenNavs() {
  var openDrops = document.querySelectorAll(".dropdown__trigger");

  for (var i = 0; i < openDrops.length; i++) {
    var openDropdown = openDrops[i];

    if (openDropdown.parentElement.classList.contains("js-open")) {
      openDropdown.parentElement.classList.remove("js-open");
    }
  }
}
document.addEventListener(
  "click",
  function (event) {
    if (!event.target.closest(".dropdown__trigger")) {
      closeOpenNavs();
    } else if (
      event.target.closest(".dropdown__trigger") &&
      event.target.parentElement.closest(".js-open")
    ) {
      event.target
        .closest(".dropdown__trigger")
        .parentElement.classList.remove("js-open");
    } else if (event.target.closest(".dropdown__trigger")) {
      closeOpenNavs();
      event.target
        .closest(".dropdown__trigger")
        .parentElement.classList.add("js-open");
    }
  },
  false
);