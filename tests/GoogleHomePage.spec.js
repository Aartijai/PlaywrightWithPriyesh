import { test, expect } from '@playwright/test';
//import { test, expect } from '@playwright/test';
import { GoogleHomePage } from '../pages/GoogleHomePage';
import { ResultSearchPage } from '../pages/ResultSearchPage';
import { UdemyPage } from '.,/pages/UdemyPage';

 test('The series of Home page', async ({ page }) => {
    //Go to URL
    const google = new GoogleHomePage(page);
     await google.goto();
    //Search for Playwright in serachBox
    await  google.serachTextBoxInput()
    //clik the first  link in next page
    const results = new ResultSearchPage();
    await  results.clickplayWrightingLink();
    //In the udemy page search for 'Playwright' in searchBox
    const udemy = new UdemyPage();
    await  udemy.searchInputComboBoxInput()
 })


 