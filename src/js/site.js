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

    addClass(errorIcon, "active");
    addClass(errorContent, "active");
    addClass(email, "error");

    errorContent.setAttribute("role", "alert");
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Features Tabbed Content

const featuresNav = document.querySelector(".features-nav");
const featuresContent = document.querySelectorAll(".features__content");
const navLinks = document.querySelectorAll(".features-nav__item");

featuresNav.addEventListener("click", function(e) {
  const clickedTarget = e.target.dataset.target;
  const clickedFeature = e.target;

  if (e.target.tagName === "LI") {
    featuresContent.forEach(function(contentPane) {
      if (contentPane.id === clickedTarget) {
        addClass(clickedFeature, "active");
        addClass(contentPane, "active");
        // loop through each nav item and remove the active class if it's not the clicked nav item
        navLinks.forEach(function(navItem) {
          if (navItem.dataset.target !== clickedTarget) {
            removeClass(navItem, "active");
          }
        });
      } else {
        removeClass(contentPane, "active");
      }
    });
  }
});
