import { expect, test } from "@playwright/test";

test("home shell renders", async ({ page }) => {
  await page.goto("/ru");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Checkpoint Retro");
});

test("news shell renders", async ({ page }) => {
  await page.goto("/ru/news");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
