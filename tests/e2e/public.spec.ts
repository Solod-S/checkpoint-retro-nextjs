import { expect, test } from "@playwright/test";

test("home shell renders all key sections and accessible elements", async ({
  page,
}) => {
  await page.goto("/ru");
  await expect(page.locator(".skip-link")).toBeAttached();
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByLabel("Checkpoint Retro")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(
    page.getByRole("region", { name: "Срочные новости" })
  ).toBeVisible();
  await expect(page.getByText("ПОСЛЕДНИЕ НОВОСТИ")).toBeVisible();
  await expect(page.getByText("СТАТЬИ И ИСТОРИИ")).toBeVisible();
  await expect(page.getByText("ДО БОЛЬШЕГО КОЛИЧЕСТВА ИСТОРИЙ")).toBeVisible();
});

test("news shell renders lead story and popular rankings", async ({ page }) => {
  await page.goto("/ru/news");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Новости");
  await expect(page.getByText("Популярное за неделю")).toBeVisible();
  await expect(page.getByText("Все новости")).toBeVisible();
});

test("articles shell renders editor picks and timeline", async ({ page }) => {
  await page.goto("/ru/articles");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Статьи и истории"
  );
  await expect(page.getByText("Выбор редакции")).toBeVisible();
  await expect(page.getByText("Игровая история по годам")).toBeVisible();
});

test("article detail page renders TOC and fact box", async ({ page }) => {
  await page.goto("/ru/articles/kak-sozdavali-pervyj-fallout");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Fallout"
  );
  await expect(page.getByText("Коротко")).toBeVisible();
  await expect(page.getByText("Мир после катастрофы")).toBeVisible();
});

test("search shell renders terminal prompt and handles query submission", async ({
  page,
}) => {
  await page.goto("/ru/search");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Поиск");
  await expect(page.getByRole("search")).toBeVisible();
  await expect(page.getByText("Популярные запросы")).toBeVisible();

  // Perform search query
  const searchInput = page.getByRole("searchbox");
  await searchInput.fill("Dreamcast");
  await searchInput.press("Enter");

  await expect(page).toHaveURL(/q=Dreamcast/);
  await expect(page.getByText(/Dreamcast/i).first()).toBeVisible();
});

test("about shell renders mission, stats, and team", async ({ page }) => {
  await page.goto("/ru/about");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Про Checkpoint Retro"
  );
  await expect(page.getByText("500+")).toBeVisible();
  await expect(page.getByText("Наши ценности")).toBeVisible();
  await expect(page.getByText("Наша команда")).toBeVisible();
});

test("locale routing switches language correctly", async ({ page }) => {
  await page.goto("/en");
  await expect(page.locator("#main-content")).toBeVisible();
  await expect(page.getByText("LATEST NEWS")).toBeVisible();
  await expect(page.getByText("ARTICLES & STORIES")).toBeVisible();

  await page.goto("/uk");
  await expect(page.locator("#main-content")).toBeVisible();
});
