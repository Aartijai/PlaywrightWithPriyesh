//import playwrightConfig from "../playwright.config";
import { expect } from '@playwright/test';

 export class GoogleHomePage {
 constructor(page)
 {
    //initialize the constructor
    this.page = page;

    //this.searchTextbox = page.locator("APjFqb");
    this.searchTextBox = page.locator('input[id="APjFqb"]');

 }

 
 async goto()
 {
    await this.page.goto('https://www.google.com/');
    
 }
async serachTextBoxInput()
{

await expect(this.searchTextbox).toBeEnabled();
await this.searchTextbox.click();
await this.searchTextbox.fill('PlayWright');
await this.searchTextbox.press('Enter');
}
}