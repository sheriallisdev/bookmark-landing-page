function addClass(el, cl) {
  el.classList.add(cl);
}

function removeClass(el, cl) {
  el.classList.remove(cl);
}

// Mobile menu overlay
const mobileOverlay = document.querySelector(".mobile-overlay");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const logoDesktop = document.querySelector(".logo__desktop");

function closeNav() {
  document.body.setAttribute("style", "overflow: visible");

  removeClass(hamburgerIcon, "hidden");
  removeClass(logoDesktop, "hidden");
  removeClass(mobileOverlay, "active");
}

function openNav() {
  document.body.setAttribute("style", "overflow: hidden");

  addClass(hamburgerIcon, "hidden");
  addClass(logoDesktop, "hidden");
  addClass(mobileOverlay, "active");
}

// Accordion

const accordionHeader = document.querySelectorAll(".accordion__header");
const accordionBody = document.querySelectorAll(".accordion__body");

accordionHeader.forEach(function(accordion) {
  accordion.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  this.classList.toggle("active");

  const accordionBody = this.nextElementSibling;
  if (accordionBody.style.display === "block") {
    accordionBody.style.display = "none";
  } else {
    accordionBody.style.display = "block";
  }
}

// Email validation
const email = document.getElementById("form__email");
const form = document.getElementById("form");
const errorContent = document.querySelector(".newsletter__form--error");
const errorIcon = document.querySelector(".icon-error");

form.addEventListener("submit", function(e) {
  if (emailIsValid(email.value) === false) {
    e.preventDefault();

    removeClass(errorContent, "hidden");
    removeClass(errorIcon, "hidden");
    addClass(errorContent, "active");
    addClass(email, "error");

    errorContent.setAttribute("role", "alert");
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
