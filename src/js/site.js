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

const accordionItems = document.querySelectorAll(".accordion__item");
const accordionBody = document.querySelectorAll(".accordion__body");

accordionItems.forEach(function(accordion) {
  const accordionHeader = accordion.firstElementChild;
  accordionHeader.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e) {
  accordionBody.forEach(function(body) {
    if (body.previousElementSibling === e.target) {
      removeClass(body, "hidden");
      addClass(body.parentElement, "active");
    } else {
      removeClass(body.parentElement, "active");
      addClass(body, "hidden");
    }
  });
}
