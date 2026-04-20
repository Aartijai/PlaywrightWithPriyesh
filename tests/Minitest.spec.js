import { test, expect } from '@playwright/test';

test('minitest @sanity', async ({ page }) => {
  await page.goto("https://todomvc.com/examples/react/dist/");
  const input = page.locator('#todo-input');

  await input.fill('Go for Walk');
  await input.press('Enter');

  await input.fill('comecback');
  await input.press('Enter');

  await input.fill('rest');
  await input.press('Enter');

  await page.getByRole('link', { name: 'All' }).click();

  // Click Completed filter (optional)
  await page.getByRole('link', { name: 'Completed' }).click();
});



