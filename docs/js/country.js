let countryInput = document.getElementById("countryInput");
let countryList = document.querySelectorAll("#country-wrapper li");
let countryWrap = document.getElementById("country-wrapper");
let countryMainInput = document.getElementById("country");

countryInput.addEventListener("keyup", filterList);

countryMainInput.addEventListener("click", function () {
  toggleList();
  countryInput.focus();
});

function closeList() {
  countryWrap.classList.remove("show");
}
function toggleList() {
  countryWrap.classList.toggle("show");
}
function openList() {
  countryWrap.classList.add("show");
  countryInput.focus();
}

function filterList() {
  let filterValue = document
    .getElementById("countryInput")
    .value.trim()
    .toUpperCase();

  document.querySelectorAll("#country-wrapper li").forEach(element => {
    if (element.innerHTML.toUpperCase().trim().indexOf(filterValue) > -1) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

countryList.forEach(el => {
  el.addEventListener("click", function () {
    countryMainInput.value = el.innerHTML.trim();
    countryInput = "";
    closeList();
  });
});

window.addEventListener("click", function (e) {
  if (!e.target.classList.contains("c-input")) {
    closeList();
  }
});
