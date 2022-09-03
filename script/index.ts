/**
FOR THE STICKY TOTAL SECTION 
*/
enum Width {
  MOBILE = 650,
}
const placeOrderBtn = document.getElementById("placeOrder") as HTMLElement;
const stickyElement = document.getElementById("sticky-total") as HTMLElement;
let documentWidth = window.innerWidth;
const isMobileWidth = (width: number) => (width <= Width.MOBILE ? true : false);
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
  if (isMobileWidth(documentWidth)) {
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
  documentWidth = window.innerWidth;
  handleScrollAnimation();
});
window.addEventListener("mousemove", () => {
  documentWidth = window.innerWidth;
  handleScrollAnimation();
});
window.addEventListener("load", () => {
  handleScrollAnimation();
});
window.addEventListener("resize", function () {
  documentWidth = window.innerWidth;
  handleScrollAnimation();
  if (!isMobileWidth(documentWidth)) {
    stickyElement?.classList.remove("show");
  }
});
