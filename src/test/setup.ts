import "@testing-library/jest-dom/vitest";

// jsdom does not implement scrolling or IntersectionObserver.
window.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};

/*
  React Router's data router constructs `new Request(url, { signal })` for every
  navigation. Under jsdom the `AbortSignal` is jsdom's implementation while
  `Request` is Node's (undici), and undici rejects the foreign signal with
  "Expected signal to be an instance of AbortSignal".

  Navigations in tests are never aborted, so the shim drops the signal rather
  than trying to reconcile two AbortSignal implementations. Test-only: the real
  browser has one consistent set of these globals.
*/
const NativeRequest = globalThis.Request;
if (NativeRequest) {
  class TestRequest extends NativeRequest {
    constructor(input: RequestInfo | URL, init?: RequestInit) {
      if (init && "signal" in init) {
        const { signal: _dropped, ...rest } = init;
        super(input, rest);
        return;
      }
      super(input, init);
    }
  }
  Object.defineProperty(globalThis, "Request", { value: TestRequest, writable: true });
}
