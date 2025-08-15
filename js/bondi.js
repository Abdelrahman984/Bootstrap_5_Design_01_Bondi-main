document.addEventListener("click", (e) => {
  if (
    document.querySelector(".navbar-collapse.show") &&
    !e.target.closest(".navbar")
  ) {
    bootstrap.Collapse.getInstance(
      document.querySelector(".navbar-collapse")
    ).hide();
  }
});

//!-------------------------------------------------------------------------------------

let switcherLis = document.querySelectorAll(".portfolio ul li");
let items = Array.from(document.querySelectorAll(".portfolio .row .box"));

switcherLis.forEach(function (li) {
  li.addEventListener("click", function () {
    switcherLis.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");

    let filterValue = this.textContent.trim();

    items.forEach((item) => {
      if (filterValue === "All" || item.dataset.work === filterValue) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});
