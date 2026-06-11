import { expect, type Page, test } from "@playwright/test";

const expectedNavLinks = [
  { name: "首頁", href: "#top" },
  { name: "歷史沿革", href: "https://walterintw.github.io/huahkwang-history-site/" },
  { name: "華光寺願景", href: "https://walterintw.github.io/huahkwang-vision-page/" },
  { name: "現在的華光寺", href: "https://walterintw.github.io/huahkwang-today/" },
  { name: "印度八大聖地", href: "https://walterintw.github.io/huahkwang-sacred-sites/" },
  { name: "交通與聯絡", href: "#contact" }
];

async function loadHomePage(page: Page) {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    consoleErrors.push(error.message);
  });

  await page.goto("/");
  await expect(page).toHaveTitle(/華光寺 Huah Kwang Temple/);
  await page.evaluate(() => document.fonts.ready);

  return consoleErrors;
}

test("首頁可載入，沒有 console error，並產生截圖", async ({ page }, testInfo) => {
  const consoleErrors = await loadHomePage(page);

  await expect(page.getByRole("heading", { name: /在聖地因緣中/ })).toBeVisible();
  await expect(page.locator(".brand-logo")).toBeVisible();

  expect(consoleErrors).toEqual([]);

  await page.screenshot({
    path: `test-results/screenshots/home-${testInfo.project.name}.png`,
    fullPage: true
  });
});

test("沒有水平 overflow", async ({ page }) => {
  const consoleErrors = await loadHomePage(page);

  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return {
      scrollWidth: doc.scrollWidth,
      clientWidth: doc.clientWidth,
      bodyScrollWidth: document.body.scrollWidth
    };
  });

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  expect(overflow.bodyScrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  expect(consoleErrors).toEqual([]);
});

test("主要導覽連結可點且 href 正確", async ({ page, isMobile }) => {
  const consoleErrors = await loadHomePage(page);

  if (isMobile) {
    await page.getByRole("button", { name: "開啟導覽選單" }).click();
  }

  const nav = page.getByRole("navigation", { name: "主要導覽" });

  for (const linkInfo of expectedNavLinks) {
    const link = nav.getByRole("link", { name: linkInfo.name });

    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", linkInfo.href);
    await link.click({ trial: true });
  }

  expect(consoleErrors).toEqual([]);
});

test("重要圖片有正常載入", async ({ page }) => {
  const consoleErrors = await loadHomePage(page);
  const images = page.locator("img");
  const imageCount = await images.count();

  expect(imageCount).toBeGreaterThan(0);

  for (let index = 0; index < imageCount; index += 1) {
    const image = images.nth(index);

    await expect(image).toBeVisible();

    const loaded = await image.evaluate((element) => {
      const imageElement = element as HTMLImageElement;
      return imageElement.complete && imageElement.naturalWidth > 0 && imageElement.naturalHeight > 0;
    });

    expect(loaded).toBe(true);
  }

  expect(consoleErrors).toEqual([]);
});
