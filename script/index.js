/**
FOR THE STICKY TOTAL SECTION
*/
var width;
(function (width) {
    width[width["MOBILE"] = 650] = "MOBILE";
})(width || (width = {}));
var placeOrderBtn = document.getElementById("placeOrder");
var stickyElement = document.getElementById("sticky-total");
var documentWidth = window.innerWidth;
var isMobileWidth = function (width) { return (width <= 650 ? true : false); };
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
    if (isMobileWidth(documentWidth)) {
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
    documentWidth = window.innerWidth;
    handleScrollAnimation();
});
window.addEventListener("mousemove", function () {
    documentWidth = window.innerWidth;
    handleScrollAnimation();
});
window.addEventListener("load", function () {
    handleScrollAnimation();
});
window.addEventListener("resize", function () {
    documentWidth = window.innerWidth;
    handleScrollAnimation();
    if (!isMobileWidth(documentWidth)) {
        stickyElement === null || stickyElement === void 0 ? void 0 : stickyElement.classList.remove("show");
    }
});
