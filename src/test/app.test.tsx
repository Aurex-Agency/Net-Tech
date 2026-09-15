import { describe, expect, it } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import type { RouteObject } from "react-router-dom";
import { routes, staticPaths } from "@/App";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { site } from "@/lib/site";

/**
 * Routes are lazy, so the router resolves them asynchronously. Every
 * assertion about page content waits for the route module to load.
 */
const renderAt = (path: string) => {
  const router = createMemoryRouter(routes as unknown as RouteObject[], {
    initialEntries: [path],
    future: { v7_relativeSplatPath: true },
  });
  return render(
    <HelmetProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </HelmetProvider>,
  );
};

const h1 = async () => (await screen.findByRole("heading", { level: 1 })).textContent ?? "";

describe("routing", () => {
  it("renders the home page with a headline and primary call to action", async () => {
    renderAt("/");
    expect(await h1()).toMatch(/IT partner/i);
    await waitFor(() =>
      expect(screen.getAllByRole("link", { name: /free consultation/i }).length).toBeGreaterThan(0),
    );
  });

  it("gives every service its own page with a unique heading", async () => {
    for (const s of services) {
      const view = renderAt(`/services/${s.slug}`);
      expect(await h1()).toContain(s.title);
      view.unmount();
    }
  });

  it("gives every location its own page", async () => {
    for (const l of locations) {
      const view = renderAt(`/locations/${l.slug}`);
      expect(await h1()).toContain(l.title);
      view.unmount();
    }
  });

  it("renders the pricing and FAQ pages", async () => {
    const pricing = renderAt("/pricing");
    expect(await h1()).toMatch(/costs/i);
    pricing.unmount();

    renderAt("/faq");
    expect(await h1()).toMatch(/answers/i);
  });

  it("renders the not-found page for unknown routes", async () => {
    renderAt("/does-not-exist");
    expect(await h1()).toMatch(/not here/i);
  });

  it("shows the business phone number in the header on every page", async () => {
    renderAt("/about");
    await screen.findByRole("heading", { level: 1 });
    const header = screen.getByRole("banner");
    const phone = new RegExp(site.phone.display.replace(/[()]/g, "\\$&"));
    expect(within(header).getAllByRole("link", { name: phone }).length).toBeGreaterThan(0);
  });
});

describe("sitemap coverage", () => {
  it("lists a static path for every service and location", () => {
    for (const s of services) expect(staticPaths).toContain(`/services/${s.slug}`);
    for (const l of locations) expect(staticPaths).toContain(`/locations/${l.slug}`);
  });

  it("does not list the 404 route", () => {
    expect(staticPaths).not.toContain("*");
  });
});
