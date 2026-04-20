//google-search.spec.ts
import { test, expect } from '@playwright/test';

test('Search text in Google and verify results', async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Accept cookies if the popup appears (EU/US variations)
  const acceptButton = page.locator('button', { hasText: /Accept all|I agree/i });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  // Type search query
  await page.fill('input[name="q"]', 'Playwright automation');

  // Press Enter to search
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForSelector('#search');

  // Assertion: Verify that results contain expected text
  const bodyText = await page.textContent('body');
  expect(bodyText).toContain('Playwright');
});
