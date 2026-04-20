import { test, expect } from '@playwright/test';
import { threadName } from 'worker_threads';

test.skip('DemoBlazeSwitchStmnt', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/');
  //await page.locator.getByText('CATEGORIES').click();

  let CATEGORIES = "Phones";
  switch (CATEGORIES) {
  case "Phones":
  
  await page.getByText('Phones').click();
 console.log("Phones Displayed");
 break;

  case "Laptops": 
await page.getByText('Laptops').click();
 console.log("Laptops Displayed");
 break;

  case 3:Mobiles  
 await page.getByText('Mobiles').click();
 console.log("Mobiles Displayed");
 break;
  
default :
console.log("None Displayed");
}
});

//-------GetProdpriceTitledescp--Passed--------------------------------------------------------------
test.skip('DemoBlazeGetProdpriceTitledescp', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByText('Phones').click();
    
  const ProductsOnListPage = page.locator('.hrefch');
   
  //const Title = await page.locator('.hrefch').first().innerText();
  const TitleOnListPage = await ProductsOnListPage.nth(0).innerText();
  const PriceOnListPage = await page.locator('.card-block h5').nth(0).innerText();
  const DescrpOnListPage = await page.locator('#article').nth(0).innerText();
   
   console.log(
        "The list page first item is:" +
        "\n Title: " + TitleOnListPage +
        "\n Price: " + PriceOnListPage +
        "\n Description: " + DescrpOnListPage
    );

});
  
//-------GetFirst 3 ProdpriceTitledescp--Passed--------------------------------------------------------------
test.skip('DemoBlazeGetFirst3ProdpriceTitledescp', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByText('Phones').click();
    
   const ProductsOnListPage = page.locator('.hrefch');
   
 for (let i=0; i<3; i++) 
    {
   
 const TitleOnListPage = await ProductsOnListPage.nth(i).innerText();
 const PriceOnListPage = await page.locator('.card-block h5').nth(i).innerText();
const DescrpOnListPage = await page.locator('#article').nth(i).innerText();
     
   console.log(
        "The list page first item is:" +
                "\n Title: " + TitleOnListPage +
        "\n Price: " + PriceOnListPage +
        "\n Description: " + DescrpOnListPage +
        "\n-----------------------------"
    );
  }
 });
 
 //-------CompareTitlePageToListPag--passed----------------------------------------------------------------
test.skip('CompareTitlePageToListPage', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
    await page.getByText('Phones').click();
    
   const ProdsListPageOnFirstProductCard = page.locator('.col-lg-4.col-md-6.mb-4').nth(0);

  const TitleOnListPage = await ProdsListPageOnFirstProductCard.locator('.hrefch').innerText()
  const PriceOnListPage = await ProdsListPageOnFirstProductCard.locator('h5').innerText();
  const DescrpOnListPage = await ProdsListPageOnFirstProductCard.locator('.card-text').innerText();
   
   console.log(
        "The list page first item is:" +
        "\n Title: " + TitleOnListPage +
        "\n Price: " + PriceOnListPage +
        "\n Description: " + DescrpOnListPage
    );

  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  const ProductsOnTitlePage = page.locator('h2.name');
  const TitleOnTitlePage = await page.locator('h2.name').innerText();
  const PriceOnTitlePage = await page.locator('h3.price-container').innerText();
  const DescrpOnTitlePage = await page.locator('#myTabContent').innerText();
     
   console.log(
        "The Title page first item is:" +
        "\n Title: " + TitleOnTitlePage +
        "\n Price: " + PriceOnTitlePage +
        "\n Description: " + DescrpOnTitlePage
    );
     
      expect(TitleOnTitlePage).toContain(TitleOnListPage);
       expect(TitleOnTitlePage).toContain(TitleOnListPage);
        expect(TitleOnTitlePage).toContain(TitleOnListPage);
        console.log("SUCCESS: List page and title page match");
   
});
//----------------Basic Locators-------------
test('Basiclocators', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');
   //await page.locator('[id="cat"]');
   await page.locator('#cat');
  //await page.getByRole('link' {class :'list-group-item'});
  await page.getByRole('link', { name: /phones|laptops|monitors/i });

  await page.getByText('Laptops').click();
//await page.Locator("itemc").nth(2);
await page.locator('#itemc').nth(2).click();

//await page.getByRole('button', { name :"next2"})
await page.getByRole('button', { name: 'Next' }).click();

 //page.locator(#'next2')
 await page.locator('#next2').click();
 //Get all product titles on the Phones page
 const titles = await page.locator('.hrefch').allInnerTexts();
  console.log(titles);
 //Click a product by partial text'

await page.locator('.hrefch', { hasText: 'Samsung' }).click();
//Extract price + description for each product card
const prices = await page.locator('h5').allInnerTexts();
  const descriptions = await page.locator('.card-text').allInnerTexts();

});
