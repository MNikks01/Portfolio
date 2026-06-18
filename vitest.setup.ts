import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom does not implement these browser APIs that some components and
// framer-motion rely on — provide lightweight mocks for the test environment.
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
}

class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

window.IntersectionObserver =
  window.IntersectionObserver ??
  (MockObserver as unknown as typeof IntersectionObserver);
window.ResizeObserver =
  window.ResizeObserver ?? (MockObserver as unknown as typeof ResizeObserver);
