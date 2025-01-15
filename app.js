const menu = document.querySelector("mobile-menu");
const menulinks = document.querySelector("navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});

// function to make logos move
const logos = document.querySelector(".rotating-logos__track").cloneNode(true);
document.querySelector(".rotating-logos").appendChild(logos);

// function in toggle the momthly yearly plan
function switchPricing() {
  const checkbox = document.getElementById("pricing-toggle-checkbox");
  const monthlyPrices = document.querySelectorAll(".monthly-price");
  const yearlyPrices = document.querySelectorAll(".yearly-price");
  const yearlyDiscount = document.querySelectorAll(".save-percentage");

  if (checkbox.checked) {
    monthlyPrices.forEach((price) => price.classList.add("hidden"));
    yearlyPrices.forEach((price) => price.classList.remove("hidden"));
    yearlyDiscount.style.display = "inline";
  } else {
    monthlyPrices.forEach((price) => price.classList.remove("hodden"));
    yearlyPrices.forEach((price) => price.classList.add("hiddem"));
    yearlyDiscount.style.display = "none";
  }
}

window.addEventListener("load", () => {
  const yearlyElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearlyElement.textContent = currentYear;
});
