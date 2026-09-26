import { expect, test } from "@playwright/test";

test("admin login page renders login form with presets", async ({ page }) => {
  await page.goto("/admin/login");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Вход в панель управления"
  );
  await expect(page.getByLabel("Email адрес")).toBeVisible();
  await expect(page.getByLabel("Пароль")).toBeVisible();
  await expect(page.getByRole("button", { name: "Войти в систему" })).toBeVisible();
});

test("admin login authenticates and redirects to dashboard", async ({ page }) => {
  await page.goto("/admin/login");
  await page.getByLabel("Email адрес").fill("admin@checkpoint-retro.org");
  await page.getByLabel("Пароль").fill("admin-secret-dev-password");
  await page.getByRole("button", { name: "Войти в систему" }).click();

  // Redirects to /admin
  await expect(page).toHaveURL(/\/admin/);
  await expect(page.getByText("Панель управления")).toBeVisible();
  await expect(page.getByText("Алексей Морозов")).toBeVisible();
});
