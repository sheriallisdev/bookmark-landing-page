// Accordion

function addClass(el, cl){
  el.classList.add(cl);
}

function removeClass(el, cl){
  el.classList.remove(cl);
}

const accordionItems = document.querySelectorAll('.accordion__item');
const accordionBody = document.querySelectorAll('.accordion__body');

accordionItems.forEach(function(accordion){
  const accordionHeader = accordion.firstElementChild;
  accordionHeader.addEventListener("click", toggleAccordion);
});

function toggleAccordion(e){
  accordionBody.forEach(function(body){

    if(body.previousElementSibling === e.target){
      removeClass(body, 'hidden');
      addClass(body.parentElement, 'active');
    } else {
      removeClass(body.parentElement, 'active');
      addClass(body, 'hidden');
    }
  });
}