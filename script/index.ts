const placeOrderBtn = document.getElementById("placeOrder") as HTMLElement;
const stickyElement = document.getElementById("sticky-total") as HTMLElement;
let documentWidth = window.innerWidth;
const elementInView = (el: HTMLElement, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el: HTMLElement) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element: HTMLElement) => {
  if (documentWidth <= 500) {
    element.classList.add("show");
  }
};

const hideScrollElement = (element: HTMLElement) => {
  element.classList.remove("show");
};

const handleScrollAnimation = () => {
  if (elementInView(placeOrderBtn, 1.25)) {
    displayScrollElement(stickyElement);
  } else if (elementOutofView(placeOrderBtn)) {
    hideScrollElement(stickyElement);
  }
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
window.addEventListener("mousemove", () => {
  documentWidth = window.innerWidth;
});
window.addEventListener("load", () => {
  handleScrollAnimation();
});
