const checkoutAccordion = document.querySelectorAll("#checkout-accordion1");
const accordionClick = document.querySelectorAll("#checkout-click");



accordionClick.forEach((x) => {
    let parent = x.parentElement.parentElement.nextElementSibling;
    let isOpen = false; 
  
    x.addEventListener('click', function toggleAccordion() {
      if (isOpen) {
        parent.classList.remove("accordionNotActive");
        isOpen = false;
      } else {
        parent.classList.add("accordionNotActive");
        isOpen = true;
      }
    });
  });

  
  
  