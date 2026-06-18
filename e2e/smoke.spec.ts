import { test, expect } from "@playwright/test";

test.describe("portfolio smoke", () => {
  test("home renders the hero", async ({ page }) => {
    await page.goto("/");
    // Loader dismisses after boot; auto-waiting handles the delay.
    await expect(
      page.getByText("Senior Full Stack Engineer").first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /view projects/i }),
    ).toBeVisible();
  });

  test("theme toggle switches the theme", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    const before = (await html.getAttribute("class")) ?? "";
    await page
      .getByRole("button", { name: /switch to (light|dark) theme/i })
      .first()
      .click();
    await expect
      .poll(async () =>
        ((await html.getAttribute("class")) ?? "").includes("light"),
      )
      .toBe(!before.includes("light"));
  });

  test("nav anchors jump to sections", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Skills" }).first().click();
    await expect(page).toHaveURL(/#skills$/);
    await expect(page.locator("#skills")).toBeInViewport();
  });
});
