# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoBlaze.spec.js >> Basiclocators
- Location: tests\DemoBlaze.spec.js:114:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Next' }) resolved to 2 elements:
    1) <a role="button" data-slide="next" class="carousel-control-next" href="#carouselExampleIndicators">…</a> aka locator('#carouselExampleIndicators').getByRole('button', { name: 'Next' })
    2) <button value="9" id="next2" class="page-link">Next</button> aka locator('#next2')

Call log:
  - waiting for getByRole('button', { name: 'Next' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - link "PRODUCT STORE" [ref=e3] [cursor=pointer]:
      - /url: index.html
      - img [ref=e4]
      - text: PRODUCT STORE
    - list [ref=e6]:
      - listitem [ref=e7]:
        - link "Home (current)" [ref=e8] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e9]: (current)
      - listitem [ref=e10]:
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e12]:
        - link "About us" [ref=e13] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e14]:
        - link "Cart" [ref=e15] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e16]:
        - link "Log in" [ref=e17] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e18]:
        - link "Sign up" [ref=e19] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e21]:
      - list [ref=e22]:
        - listitem [ref=e23] [cursor=pointer]
        - listitem [ref=e24] [cursor=pointer]
        - listitem [ref=e25] [cursor=pointer]
      - img "Second slide" [ref=e28]
      - button "Previous" [ref=e29] [cursor=pointer]:
        - generic [ref=e31]: Previous
      - button "Next" [ref=e32] [cursor=pointer]:
        - generic [ref=e34]: Next
  - generic [ref=e36]:
    - generic [ref=e38]:
      - link "CATEGORIES" [ref=e39] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e40] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e41] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [active] [ref=e42] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e46]:
          - link [ref=e47] [cursor=pointer]:
            - /url: prod.html?idp_=10
          - generic [ref=e48]:
            - heading "Apple monitor 24" [level=4] [ref=e49]:
              - link "Apple monitor 24" [ref=e50] [cursor=pointer]:
                - /url: prod.html?idp_=10
            - heading "$400" [level=5] [ref=e51]
            - paragraph [ref=e52]: LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD display with IPS technology and an optimum resolution of 2560x1440. It has a 178 degree horizontal and vertical viewing angle, a "typical" brightness of 375 cd/m2, contrast ratio of 1000:1, and a 12 ms response time.
        - generic [ref=e54]:
          - link [ref=e55] [cursor=pointer]:
            - /url: prod.html?idp_=14
          - generic [ref=e56]:
            - heading "ASUS Full HD" [level=4] [ref=e57]:
              - link "ASUS Full HD" [ref=e58] [cursor=pointer]:
                - /url: prod.html?idp_=14
            - heading "$230" [level=5] [ref=e59]
            - paragraph [ref=e60]: ASUS VS247H-P 23.6- Inch Full HD
      - list [ref=e62]:
        - listitem [ref=e63]:
          - button "Previous" [ref=e64]
        - listitem [ref=e65]:
          - button "Next" [ref=e66] [cursor=pointer]
  - generic [ref=e68]:
    - generic [ref=e71]:
      - heading "About Us" [level=4] [ref=e72]
      - paragraph [ref=e73]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e76]:
      - heading "Get in Touch" [level=4] [ref=e77]
      - paragraph [ref=e78]: "Address: 2390 El Camino Real"
      - paragraph [ref=e79]: "Phone: +440 123456"
      - paragraph [ref=e80]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e84]:
      - img [ref=e85]
      - text: PRODUCT STORE
  - contentinfo [ref=e86]:
    - paragraph [ref=e87]: Copyright © Product Store
```

# Test source

```ts
  27  | console.log("None Displayed");
  28  | }
  29  | });
  30  | 
  31  | //-------GetProdpriceTitledescp--Passed--------------------------------------------------------------
  32  | test.skip('DemoBlazeGetProdpriceTitledescp', async ({ page }) => {
  33  |     await page.goto('https://www.demoblaze.com/');
  34  |     await page.getByText('Phones').click();
  35  |     
  36  |   const ProductsOnListPage = page.locator('.hrefch');
  37  |    
  38  |   //const Title = await page.locator('.hrefch').first().innerText();
  39  |   const TitleOnListPage = await ProductsOnListPage.nth(0).innerText();
  40  |   const PriceOnListPage = await page.locator('.card-block h5').nth(0).innerText();
  41  |   const DescrpOnListPage = await page.locator('#article').nth(0).innerText();
  42  |    
  43  |    console.log(
  44  |         "The list page first item is:" +
  45  |         "\n Title: " + TitleOnListPage +
  46  |         "\n Price: " + PriceOnListPage +
  47  |         "\n Description: " + DescrpOnListPage
  48  |     );
  49  | 
  50  | });
  51  |   
  52  | //-------GetFirst 3 ProdpriceTitledescp--Passed--------------------------------------------------------------
  53  | test.skip('DemoBlazeGetFirst3ProdpriceTitledescp', async ({ page }) => {
  54  |     await page.goto('https://www.demoblaze.com/');
  55  |     await page.getByText('Phones').click();
  56  |     
  57  |    const ProductsOnListPage = page.locator('.hrefch');
  58  |    
  59  |  for (let i=0; i<3; i++) 
  60  |     {
  61  |    
  62  |  const TitleOnListPage = await ProductsOnListPage.nth(i).innerText();
  63  |  const PriceOnListPage = await page.locator('.card-block h5').nth(i).innerText();
  64  | const DescrpOnListPage = await page.locator('#article').nth(i).innerText();
  65  |      
  66  |    console.log(
  67  |         "The list page first item is:" +
  68  |                 "\n Title: " + TitleOnListPage +
  69  |         "\n Price: " + PriceOnListPage +
  70  |         "\n Description: " + DescrpOnListPage +
  71  |         "\n-----------------------------"
  72  |     );
  73  |   }
  74  |  });
  75  |  
  76  |  //-------CompareTitlePageToListPag--passed----------------------------------------------------------------
  77  | test.skip('CompareTitlePageToListPage', async ({ page }) => {
  78  |     await page.goto('https://www.demoblaze.com/');
  79  |     await page.getByText('Phones').click();
  80  |     
  81  |    const ProdsListPageOnFirstProductCard = page.locator('.col-lg-4.col-md-6.mb-4').nth(0);
  82  | 
  83  |   const TitleOnListPage = await ProdsListPageOnFirstProductCard.locator('.hrefch').innerText()
  84  |   const PriceOnListPage = await ProdsListPageOnFirstProductCard.locator('h5').innerText();
  85  |   const DescrpOnListPage = await ProdsListPageOnFirstProductCard.locator('.card-text').innerText();
  86  |    
  87  |    console.log(
  88  |         "The list page first item is:" +
  89  |         "\n Title: " + TitleOnListPage +
  90  |         "\n Price: " + PriceOnListPage +
  91  |         "\n Description: " + DescrpOnListPage
  92  |     );
  93  | 
  94  |   await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  95  |   const ProductsOnTitlePage = page.locator('h2.name');
  96  |   const TitleOnTitlePage = await page.locator('h2.name').innerText();
  97  |   const PriceOnTitlePage = await page.locator('h3.price-container').innerText();
  98  |   const DescrpOnTitlePage = await page.locator('#myTabContent').innerText();
  99  |      
  100 |    console.log(
  101 |         "The Title page first item is:" +
  102 |         "\n Title: " + TitleOnTitlePage +
  103 |         "\n Price: " + PriceOnTitlePage +
  104 |         "\n Description: " + DescrpOnTitlePage
  105 |     );
  106 |      
  107 |       expect(TitleOnTitlePage).toContain(TitleOnListPage);
  108 |        expect(TitleOnTitlePage).toContain(TitleOnListPage);
  109 |         expect(TitleOnTitlePage).toContain(TitleOnListPage);
  110 |         console.log("SUCCESS: List page and title page match");
  111 |    
  112 | });
  113 | //----------------Basic Locators-------------
  114 | test('Basiclocators', async ({ page }) => {
  115 | 
  116 |   await page.goto('https://www.demoblaze.com/');
  117 |    //await page.locator('[id="cat"]');
  118 |    await page.locator('#cat');
  119 |   //await page.getByRole('link' {class :'list-group-item'});
  120 |   await page.getByRole('link', { name: /phones|laptops|monitors/i });
  121 | 
  122 |   await page.getByText('Laptops').click();
  123 | //await page.Locator("itemc").nth(2);
  124 | await page.locator('#itemc').nth(2).click();
  125 | 
  126 | //await page.getByRole('button', { name :"next2"})
> 127 | await page.getByRole('button', { name: 'Next' }).click();
      |                                                  ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'Next' }) resolved to 2 elements:
  128 | 
  129 |  //page.locator(#'next2')
  130 |  await page.locator('#next2').click();
  131 |  //Get all product titles on the Phones page
  132 |  const titles = await page.locator('.hrefch').allInnerTexts();
  133 |   console.log(titles);
  134 |  //Click a product by partial text'
  135 | 
  136 | await page.locator('.hrefch', { hasText: 'Samsung' }).click();
  137 | //Extract price + description for each product card
  138 | const prices = await page.locator('h5').allInnerTexts();
  139 |   const descriptions = await page.locator('.card-text').allInnerTexts();
  140 | 
  141 | });
  142 | 
```