var placeOrderBtn = document.getElementById("placeOrder");
var stickyElement = document.getElementById("sticky-total");
var documentWidth = window.innerWidth;
var elementInView = function (el, dividend) {
    if (dividend === void 0) { dividend = 1; }
    var elementTop = el.getBoundingClientRect().top;
    return (elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend);
};
var elementOutofView = function (el) {
    var elementTop = el.getBoundingClientRect().top;
    return (elementTop > (window.innerHeight || document.documentElement.clientHeight));
};
var displayScrollElement = function (element) {
    if (documentWidth <= 500) {
        element.classList.add("show");
    }
};
var hideScrollElement = function (element) {
    element.classList.remove("show");
};
var handleScrollAnimation = function () {
    if (elementInView(placeOrderBtn, 1.25)) {
        displayScrollElement(stickyElement);
    }
    else if (elementOutofView(placeOrderBtn)) {
        hideScrollElement(stickyElement);
    }
};
window.addEventListener("scroll", function () {
    handleScrollAnimation();
});
window.addEventListener("mousemove", function () {
    documentWidth = window.innerWidth;
});
window.addEventListener("load", function () {
    handleScrollAnimation();
});
