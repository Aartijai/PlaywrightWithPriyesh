import { test, expect } from '@playwright/test';

test.skip('SignIn', async ({ page }) => {
   await page.goto('https://www.amazon.com/');


   await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();

   await page.getByRole('textbox', { name: 'Enter mobile number or email' })
      .fill('prabhugoud@yahoo.com');

   await page.getByRole('button', { name: 'Continue' }).click();

   await page.getByRole('textbox', { name: 'Password' }).fill('Elect1City');

   await page.getByRole('button', { name: 'Sign in', exact: true }).click();
   await expect(page).toHaveURL('/amazon\.com/');
});

//-------MobileProductsPage-------------------------------------------

test.skip('MobileProductsPage', async ({ page }) => {

   await page.goto('https://www.amazon.com/');
   // Force region
   await page.context().addCookies([
      { name: "lc-main", value: "en_US", domain: ".amazon.com", path: "/" }
   ]);
   await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('mobile');
   await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');

   //await page.waitForSelector('.s-product-image-container');
   // const products = page.locator('.s-product-image-container');
   await page.waitForSelector('[data-component-type="s-search-result"]');
   //const products = page
   //  .locator('[data-component-type="s-search-result"]')
   //   .filter({ has: page.locator('h2 a.a-link-normal') });
   const products = page
      .locator('[data-component-type="s-search-result"]')
      .filter({ has: page.locator('.a-link-normal.s-no-outline') });

   //const products = page.locator('[data-component-type="s-search-result"]');
   // const titles = page.locator('h2 a.a-link-normal');
   // const prices = page.locator('.a-price .a-offscreen');

   for (let i = 0; i < 3; i++) {

      const product = products.nth(i);

      const title = await product.locator('h2 a.a-link-normal').innerText();
      const price = await product.locator('.a-price .a-offscreen').first().innerText();

      console.log(`Product ${i + 1}: ${title} - ${price}`);
   }

});

//--------IF / ELSE — Check if a product has a price----------------------
test('MobileProdPage-IF-Then-Else', async ({ page }) => {

   await page.goto('https://www.amazon.com/');

   await page.context().addCookies([
      { name: "lc-main", value: "en_US", domain: ".amazon.com", path: "/" }
   ]);

   await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('mobile');
   await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');

   await page.waitForSelector('[data-component-type="s-search-result"]');

   const products = page.locator('[data-component-type="s-search-result"]');
   const count = await products.count();
   console.log("the count is: " + count);

   if (count > 0) {

      const product = products.nth(0);

      // TITLE (SAFE)
      let title = "No Title";
      const titleLocator = product.locator('h2 a.a-link-normal');

      if (await titleLocator.count() > 0) {
         title = await titleLocator.innerText();
      }

      console.log("title: " + title);

      // PRICE (SAFE)
      let price = "No Price";
      const priceLocator = product.locator('.a-price .a-offscreen');

      if (await priceLocator.count() > 0) {
         price = await priceLocator.first().innerText();
      }

      console.log("price: " + price);

   } else {
      console.log("The product is not found");
   }
});



