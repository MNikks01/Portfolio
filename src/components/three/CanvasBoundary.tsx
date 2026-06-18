"use client";

import { Component, ReactNode } from "react";

/**
 * Isolates the WebGL canvas: if Three/WebGL fails (context creation or a
 * context-loss on low-memory devices), we drop the 3D scene and render a soft
 * fallback instead of letting the error crash the whole page.
 */
export default class CanvasBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // swallow — the fallback is enough; nothing actionable to log for the user
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
