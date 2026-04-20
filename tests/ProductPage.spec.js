import { test, expect } from '@playwright/test';

 test('Test products page', async ({ page }) => {
//Open product page
await page.goto('https://practiceautomatedtesting.com/shopping')

//Add first product to cart
const firstProduct =  page.locator('#button', {name = 'Add to Cart'}).first();
firstProduct.click();

//Verify cart count updates
const incartLabel = page.locator('text=In cart:');
await expect(incartLabel).toHaveCount(3);

//Open cart
incartLabel.click();
const incartLabelonOpenPage = page.locator('text= in cart');

//Verify product exists
const incartLabelonOpenPage = page.locator('text= in cart');
await expect(incartLabelonOpenPage).toHaveCount(3);

//Click checkout
await page.locator('button:has-text("items")').click();

Validate confirmation