import "@testing-library/jest-dom/vitest";

// jsdom does not implement scrolling or IntersectionObserver.
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
