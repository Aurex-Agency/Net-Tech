import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "@/App";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </MemoryRouter>,
  );

describe("site", () => {
  it("renders the home page with a headline and primary call to action", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/IT partner/i);
    expect(screen.getAllByRole("link", { name: /free consultation/i }).length).toBeGreaterThan(0);
    expect(document.title).toMatch(/Net-Tech/);
  });

  it("lists every service on the services page with an anchor", () => {
    renderAt("/services");
    for (const s of services) {
      expect(document.getElementById(s.slug)).not.toBeNull();
      expect(screen.getAllByRole("heading", { name: s.title }).length).toBeGreaterThan(0);
    }
  });

  it("shows the business phone number in the header on every page", () => {
    renderAt("/about");
    const header = screen.getByRole("banner");
    expect(within(header).getAllByRole("link", { name: new RegExp(site.phone.display.replace(/[()]/g, "\\$&")) }).length).toBeGreaterThan(0);
  });

  it("renders the not-found page for unknown routes", () => {
    renderAt("/does-not-exist");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/not here/i);
  });
});
